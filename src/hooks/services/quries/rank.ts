import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getTeamStandings, getTopPlayers } from "../apis/football";

export const ranks = createQueryKeys("ranks", {
  teamRank: (league: number | string, season: string | number) => ({
    queryKey: [league, season],
    queryFn: () =>
      getTeamStandings({
        league: league as string,
        season: season as string,
      }),
  }),
  topPlayer: (type: string, season: string | number, leagueId: number) => ({
    queryKey: [type, season, leagueId],
    queryFn: () =>
      getTopPlayers({
        type,
        season,
        leagueId,
      } as {
        type: string;
        season: string;
        leagueId: number;
      }),
  }),
});
