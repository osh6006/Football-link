import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getLineUp, getLiveMatches } from "../apis/live";

export const lives = createQueryKeys("lives", {
  live: (leagueId: number) => ({
    queryKey: [leagueId],
    queryFn: () => getLiveMatches(leagueId),
  }),

  lineup: (fixtureId: number) => ({
    queryKey: [fixtureId],
    queryFn: () => getLineUp(fixtureId),
  }),
});
