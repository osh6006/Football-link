import { createQueryKeys } from "@lukemorales/query-key-factory";

export const predicts = createQueryKeys("predicts", {
  all: (homeId?: number, awayId?: number) => ({
    queryKey: [homeId, awayId],
  }),
});
