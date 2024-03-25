import { useInfiniteQuery } from "@tanstack/react-query";

import { getGlobalNews } from "../apis/news";

export const newsQueryKey = {
  useGlobalNewsQuery: "homeNextMatchQuery",
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
        return pages.length + 1;
      }
      return undefined;
    },
    select(data) {
      return data.pages.flatMap((data) => data.articles);
    },
  });
};
