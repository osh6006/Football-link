import { formatPublicDay } from "libs/day";

import Loading from "components/common/loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ComponentStatusContainer from "components/layouts/component-status-container";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { useGlobalNewsQuery } from "hooks/services/quries/use-football-query";
import { usePlayerRoot } from "./player-root";
import { useInfiniteScroll } from "hooks/use-infinite-scroll";

interface IPlayerNewsProps {}

const PlayerNews: React.FunctionComponent<IPlayerNewsProps> = () => {
  const { playerInfo } = usePlayerRoot();

  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetching } =
    useGlobalNewsQuery(playerInfo.player?.name!, true);

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  });

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

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
              <li
                onClick={() => openInNewTab(el.url)}
                key={i}
                className="flex cursor-pointer flex-col justify-around rounded-md border-2  border-MediumGrey px-5 py-3  transition-colors hover:border-Main hover:text-Main"
              >
                <div className="mb-2 flex  flex-col justify-end text-sm">
                  {/* <p>{el.author}</p>
              <p>{el.source.name}</p> */}
                  <time>{formatPublicDay(el.publishedAt)}</time>
                </div>

                <div className="flex justify-between gap-x-4">
                  <LazyLoadImage
                    effect="opacity"
                    src={el.urlToImage}
                    alt="thumbnail"
                    width={200}
                    className="aspect-square h-32 max-w-[150px] rounded-md"
                  />
                  <div className="">
                    <h2 className="font-semibold">{el.title}</h2>
                    <p className="mt-2 text-sm">{el.description}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-end justify-between text-sm">
                  <p>{el.author}</p>
                  <p>{el.source.name}</p>
                </div>
              </li>
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
