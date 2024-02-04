import { naverApi, newsApi } from "libs/axios";
import { LocalNewsResponse } from "types/football";

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

export const getGlobalNews = async ({}) => {
  return newsApi
    .get("", {
      params: {},
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Global News Error", error);
    });
};
