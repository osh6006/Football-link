import Loading from "components/common/loading";
import {
  usePlayerSearchQuery,
  useTeamSearchQuery,
} from "hooks/services/quries/use-search-query";
import useDebounce from "hooks/use-debounce";
import { useLeagueStore } from "stores/league-store";

interface SearchResultListProps<T> {
  list: T[];
  render: (item: T, index: number) => JSX.Element;
}

const SearchResultList = <T,>({ list, render }: SearchResultListProps<T>) => {
  return (
    <ul className="grid grid-cols-2 ">
      {list.map((item, index) => render(item, index))}
    </ul>
  );
};

interface ISearchResultProps {}

const SearchResult: React.FunctionComponent<ISearchResultProps> = () => {
  const debouncedSearch = useDebounce("", 300);
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const teamSearchResult = useTeamSearchQuery(
    selectedLeague?.leagueId,
    debouncedSearch,
  );

  const playerSearchResult = usePlayerSearchQuery(
    selectedLeague?.leagueId,
    debouncedSearch,
  );

  return (
    <div className="mt-10 max-h-[calc(100dvh-300px)] overflow-y-scroll rounded-md bg-white p-10">
      {/* team Result */}
      <h1 className="text-lg font-bold xl:text-xl">Team Result</h1>

      {teamSearchResult.isLoading ? (
        <div className="mx-auto my-2">
          <Loading size="md" />
        </div>
      ) : teamSearchResult.isError ? (
        <div>Something Error from Server!</div>
      ) : teamSearchResult.data && teamSearchResult.data.length <= 0 ? (
        <div className="my-10 text-center">{`No search results for "${debouncedSearch}"`}</div>
      ) : (
        <SearchResultList
          list={teamSearchResult.data || []}
          render={(item) => <li key={item?.team?.id}>{item?.team?.name}</li>}
        />
      )}

      {/* player Result */}
      <h1 className="text-lg font-bold xl:text-xl">Player Result</h1>
      <p className="text-right text-sm font-semibold text-Red">
        *The player is searched only for the currently selected league.
      </p>

      {playerSearchResult.isLoading ? (
        <div className="mx-auto my-2">
          <Loading size="md" />
        </div>
      ) : playerSearchResult.isError ? (
        <div>Something Error from Server!</div>
      ) : playerSearchResult.data && playerSearchResult.data.length <= 0 ? (
        <div className="my-10 text-center">{`No search results for "${debouncedSearch}"`}</div>
      ) : (
        <SearchResultList
          list={playerSearchResult.data || []}
          render={(item) => (
            <li key={item?.player?.id}>{item?.player?.name}</li>
          )}
        />
      )}
    </div>
  );
};

export default SearchResult;
