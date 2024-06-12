import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Loading from "components/common/loading";
import {
  usePlayerSearchQuery,
  useTeamSearchQuery,
} from "hooks/tanstack-query/use-search-query";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";
import { useSearch } from "stores/search-store";
import { useLeagueStore } from "stores/league-store";
import useSearchDebounce from "hooks/use-search-debounce";

interface SearchResultListProps<T> {
  list: T[];
  render: (item: T, index: number) => JSX.Element;
}

const SearchResultList = <T,>({ list, render }: SearchResultListProps<T>) => {
  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 ">
      {list.map((item, index) => render(item, index))}
    </ul>
  );
};

interface ISearchResultProps {}

const SearchResult: React.FunctionComponent<ISearchResultProps> = () => {
  const theme = useTheme();
  const keyword = useSearch((state) => state.keyword);
  const filter = useSearch((state) => state.filter);

  return (
    <div
      className={clsx(
        "mx-auto mt-5 max-h-[calc(100dvh-220px)] max-w-[1000px] overflow-y-auto rounded-md p-10 sm:mt-5 sm:max-h-[calc(100dvh-250px)]",
        theme === "light" ? "bg-White" : "",
        theme === "dark" ? "bg-DarkGrey" : "",
      )}
    >
      {keyword ? null : (
        <p className="text-center text-lg font-semibold">Search Something!</p>
      )}
      {filter === "team" ? <TeamSearchResult /> : null}
      {filter === "player" ? <PlayerSearchResult /> : null}
    </div>
  );
};

export default SearchResult;

function TeamSearchResult() {
  const nav = useNavigate();

  const keyword = useSearch((state) => state.keyword);
  const setIsSearchbarOpen = useSearch((state) => state.setIsOpen);
  const debouncedSearch = useSearchDebounce(keyword, 300);

  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const { data, isLoading, isError } = useTeamSearchQuery(
    selectedLeague?.leagueId,
    debouncedSearch,
  );

  return (
    <>
      {isLoading ? (
        <div className="mx-auto my-2 flex w-full items-center justify-center">
          <Loading size="md" />
        </div>
      ) : isError ? (
        <div>Something Error from Server!</div>
      ) : data && data.length <= 0 ? (
        <div className="my-10 text-center">{`No search results for "${debouncedSearch}"`}</div>
      ) : (
        <SearchResultList
          list={data || []}
          render={(item) => (
            <li
              key={item.team.id}
              onClick={() => {
                nav(`/football/${item.team.country}/team/${item.team.id}/info`);
                setIsSearchbarOpen(false);
              }}
              className="flex cursor-pointer select-none items-center justify-between truncate rounded-sm border border-MediumGrey p-2 transition hover:border-Main hover:bg-Main hover:text-White active:scale-95"
            >
              <div className="flex items-center gap-x-2 ">
                <LazyLoadImage
                  src={item.team.logo}
                  alt={item.team.name}
                  className="w-12"
                />
                {item.team.name}
              </div>
              <div className="hidden gap-x-2 text-sm capitalize sm:flex md:text-base">
                <p>{item.team.country}</p>
              </div>
            </li>
          )}
        />
      )}
    </>
  );
}
function PlayerSearchResult() {
  const nav = useNavigate();

  const keyword = useSearch((state) => state.keyword);
  const setIsSearchbarOpen = useSearch((state) => state.setIsOpen);
  const debouncedSearch = useSearchDebounce(keyword, 300);

  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const { data, isLoading, isError } = usePlayerSearchQuery(
    selectedLeague?.leagueId,
    debouncedSearch,
  );

  return (
    <>
      {isLoading ? (
        <div className="mx-auto my-2 flex w-full items-center justify-center">
          <Loading size="md" />
        </div>
      ) : isError ? (
        <div>Something Error from Server!</div>
      ) : data && data.length <= 0 ? (
        <div className="my-10 text-center">{`No search results for "${debouncedSearch}"`}</div>
      ) : (
        <SearchResultList
          list={data || []}
          render={(item) => (
            <li
              onClick={() => {
                nav(
                  `/football/${selectedLeague?.leagueId}/player/${item.player.id}/info`,
                );
                setIsSearchbarOpen(false);
              }}
              className="flex cursor-pointer  select-none items-center justify-between truncate rounded-sm border border-MediumGrey p-2 transition hover:border-Main hover:bg-Main hover:text-White active:scale-95 md:text-lg"
              key={item.player.id}
            >
              <div className="flex items-center gap-x-4 ">
                <LazyLoadImage
                  src={item.player.photo}
                  alt={item.player.name}
                  className="w-12 rounded-md"
                />
                {item.player.name}
              </div>
              <div className="hidden gap-x-2 text-sm lowercase sm:flex md:text-base">
                <p>{item.player.age} year</p>
                <p>{item.player.height}</p>
                <p>{item.player.weight}</p>
              </div>
            </li>
          )}
        />
      )}
    </>
  );
}
