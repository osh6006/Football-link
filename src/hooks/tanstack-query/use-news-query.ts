import { queries } from "hooks/services/quries";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGlobalNewsQuery = (
  query: string,
  isUse: boolean,
  filter?: string,
) => {
  return useInfiniteQuery({
    ...queries.news.global(query, filter),
    initialPageParam: 1,
    enabled: !!query && !!isUse,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.status === "ok" && lastPage.articles.length > 0) {
        return pages?.length + 1;
      }
      return undefined;
    },
    select(data) {
      return data.pages.flatMap((data) => data.articles);
    },
  });
};

export const useLocalNewsQuery = (query: string, isUse: boolean) => {
  return useInfiniteQuery({
    ...queries.news.local(query),
    initialPageParam: 1,
    enabled: !!query && !!isUse,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.start + 1;
      return lastPage.items.length === 0 ? undefined : nextPage;
    },
    select(data) {
      return data.pages.flatMap((data) => data.items);
    },
  });
};
