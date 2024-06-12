import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getGlobalNews, getNaverNews } from "../apis/news";

export const news = createQueryKeys("news", {
  global: (query: string, filter?: string) => ({
    queryKey: [query, filter],
  }),
  local: (query: string) => ({
    queryKey: [query],
  }),
});
