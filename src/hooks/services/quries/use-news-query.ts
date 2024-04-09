import { useInfiniteQuery } from "@tanstack/react-query";

import { getGlobalNews, getNaverNews } from "../apis/news";

export const newsQueryKey = {
  useGlobalNewsQuery: "globalNewsQuery",
  useLocalNewsQuery: "localNewsQuery",
};

export const useGlobalNewsQuery = (
  query: string,
  isUse: boolean,
  filter?: string,
) => {
  return useInfiniteQuery({
    queryKey: [newsQueryKey.useGlobalNewsQuery, query, filter],
    queryFn: ({ pageParam, queryKey }) =>
      getGlobalNews(queryKey[1]!, pageParam, queryKey[2]),
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
    queryKey: [newsQueryKey.useLocalNewsQuery, query],
    queryFn: ({ pageParam, queryKey }) => getNaverNews(queryKey[1], pageParam),
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
