import { useCallback, useEffect, useRef } from "react";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";

//hook props interface
interface IuseIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useInfiniteScroll = ({
  threshold = 1,
  hasNextPage,
  fetchNextPage,
}: IuseIntersectionObserverProps) => {
  //관찰할 요소입니다. 스크롤 최하단 div요소에 setTarget을 ref로 넣어 사용할 것입니다.
  const observerRef = useRef(null);

  const handleObserver = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const element = observerRef.current;

    //ointersection observer 인스턴스 생성
    const observer = new IntersectionObserver(handleObserver, {
      threshold,
    });

    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver, threshold, observerRef]);

  return { observerRef };
};
