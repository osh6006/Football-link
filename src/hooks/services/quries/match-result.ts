import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getMatchResult } from "../apis/match-result";

export const matchResults = createQueryKeys("matchResult", {
  all: (matchId: string) => ({
    queryKey: [matchId],
    queryFn: () => getMatchResult(matchId),
  }),
});
