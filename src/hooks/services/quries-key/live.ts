import { createQueryKeys } from "@lukemorales/query-key-factory";

export const lives = createQueryKeys("lives", {
  live: (leagueId: number) => ({
    queryKey: [leagueId],
  }),

  lineup: (fixtureId: number) => ({
    queryKey: [fixtureId],
  }),
});
