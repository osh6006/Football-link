import { rapidApi } from "libs/axios";
import { PredictResponse } from "types";

export const getPredict = async (h2h: string): Promise<PredictResponse[]> => {
  return await rapidApi
    .get("/fixtures/headtohead", {
      params: {
        h2h,
      },
    })
    .then((res) => res.data.response)
    .catch((error) => {
      throw new Error("Get Predict Error", error);
    });
};
