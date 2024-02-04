import { naverApi, newsApi } from "libs/axios";
import { GlobalNewsResponse, LocalNewsResponse } from "types/football";

export const getNaverNews = async (
  query: string,
  pageParam: number,
): Promise<LocalNewsResponse> => {
  return naverApi
    .get("", {
      params: {
        query,
        display: 20,
        start: pageParam,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Naver News Error", error);
    });
};

export const getGlobalNews = async (
  query: string,
  pageParam: number,
  filter?: string,
): Promise<GlobalNewsResponse> => {
  return newsApi
    .get("/everything", {
      params: {
        q: query,
        pageSize: 20,
        page: pageParam,
        sources: filter,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Global News Error", error);
    });
};
