import { naverApi, newsApi } from "libs/axios";

export const getNaverNews = async (query: string) => {
  return naverApi
    .get("", {
      params: {
        query,
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
