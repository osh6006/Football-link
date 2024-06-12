import { createQueryKeys } from "@lukemorales/query-key-factory";

export const matchResults = createQueryKeys("matchResult", {
  all: (matchId: string) => ({
    queryKey: [matchId],
  }),
});
