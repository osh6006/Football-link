import useLeagueStore from "stores/league-store";

import { useLocalNewsQuery } from "hooks/services/quries/use-football-query";
import { useInfiniteScroll } from "hooks/use-infinite-scroll";

import Loading from "components/common/loading";
import ComponentStatusContainer from "containers/component-status-container";

interface INewsListProps {
  type: "local" | "global";
}

const NewsList: React.FunctionComponent<INewsListProps> = ({ type }) => {
  const { selectedLeague } = useLeagueStore();

  const {
    data: localNewsData,
    isLoading: localLoading,
    isError: localError,
    hasNextPage,
    fetchNextPage,
    isFetching: isLocalFetching,
  } = useLocalNewsQuery("프리미어 리그", type === "local");

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  });

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  if (localLoading) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="sm" />
      </ComponentStatusContainer>
    );
  }

  if (localError) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        데이터를 불러오던 도중 오류가 발생했어요 🤮
      </ComponentStatusContainer>
    );
  }

  return (
    <div className="py-2">
      {type === "local" && (
        <>
          <ul className="flex flex-col gap-y-2">
            {localNewsData?.map((el, i) => (
              <li
                onClick={() => openInNewTab(el.link)}
                key={i}
                className="cursor-pointer rounded-md border-2  border-MediumGrey p-5  transition-colors hover:border-Main hover:text-Main"
              >
                <h2 className="font-semibold">{el.title}</h2>
                <p className="mt-2 text-sm">{el.description}</p>
              </li>
            ))}
          </ul>
          <div
            className="my-2 flex h-20 items-center justify-center p-5"
            ref={observerRef}
          >
            {isLocalFetching ? (
              <div className="my-5">
                <Loading size="sm" />
              </div>
            ) : (
              <p>Load More...</p>
            )}
          </div>
        </>
      )}
      {type === "global" && <>global news</>}
    </div>
  );
};

export default NewsList;
