import Loading from "components/common/loading";
import NewsCard from "components/news/news-card";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { usePlayerRoot } from "./player-root";
import { useInfiniteScroll } from "hooks/use-infinite-scroll";
import { useGlobalNewsQuery } from "hooks/tanstack-query/use-news-query";

import "react-lazy-load-image-component/src/effects/opacity.css";

interface IPlayerNewsProps {}

const PlayerNews: React.FunctionComponent<IPlayerNewsProps> = () => {
  const { playerInfo } = usePlayerRoot();

  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetching } =
    useGlobalNewsQuery(playerInfo.player?.name!, true);

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="500">
        <h1>An error occurred while fetching data from the server.</h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <>
      {data && data?.length > 0 ? (
        <>
          <ul className="mt-4 grid grid-cols-1 gap-2 xl:grid-cols-2">
            {data?.map((el, i) => (
              <NewsCard newsItem={el} key={el.url + el.publishedAt} />
            ))}
          </ul>
          <div
            className="my-2 flex h-20 items-center justify-center p-5"
            ref={observerRef}
          >
            {data && data?.length > 0 && isFetching ? (
              <div className="my-5">
                <Loading size="sm" />
              </div>
            ) : (
              <p>Load More...</p>
            )}
          </div>
        </>
      ) : (
        <>
          <ComponentStatusContainer
            height="300"
            state="error"
            classNames="mt-10 h-[350px]"
          >
            해당 키워드 기사가 존재하지 않습니다.
          </ComponentStatusContainer>
        </>
      )}
    </>
  );
};

export default PlayerNews;
