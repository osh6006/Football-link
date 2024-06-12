import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getGlobalNews, getNaverNews } from "../apis/news";

export const news = createQueryKeys("news", {
  global: (query: string, filter?: string) => ({
    queryKey: [query, filter],
    queryFn: (ctx) => getGlobalNews(query, ctx.pageParam as number, filter),
  }),
  local: (query: string) => ({
    queryKey: [query],
    queryFn: (ctx) => getNaverNews(query, ctx.pageParam as number),
  }),
});
