import { createQueryKeys } from "@lukemorales/query-key-factory";

export const ranks = createQueryKeys("ranks", {
  teamRank: (league: number | string, season: string | number) => ({
    queryKey: [league, season],
  }),
  topPlayer: (type: string, season: string | number, leagueId: number) => ({
    queryKey: [type, season, leagueId],
  }),
});
