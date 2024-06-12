import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getPredict } from "../apis/predict";

export const predicts = createQueryKeys("predicts", {
  all: (homeId?: number, awayId?: number) => ({
    queryKey: [homeId, awayId],
    queryFn: () => getPredict(`${homeId}-${awayId}`),
  }),
});
