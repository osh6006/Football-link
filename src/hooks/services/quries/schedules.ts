import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getHomeNextMatchSchedule } from "../apis/football";
import { getLeagueSchedule, getSeasonSchedule } from "../apis/schedule";

export const schedules = createQueryKeys("schedules", {
  all: ({
    leagueId,
    season,
    start,
    end,
    date,
    teamId,
  }: {
    season: number | string;
    start: string;
    end: string;
    date?: string;
    leagueId?: number;
    teamId?: string;
  }) => ({
    queryKey: [leagueId, season, start, end, date, teamId],
    queryFn: () =>
      getLeagueSchedule({
        leagueId,
        season,
        start,
        end,
        date,
        teamId,
      } as {
        teamId: string;
        leagueId: number;
        season: number;
        start: string;
        end: string;
        date: string;
      }),
  }),

  nextMatch: (leagueId: number) => ({
    queryKey: [leagueId],
    queryFn: () => getHomeNextMatchSchedule(leagueId),
  }),
  season: (season: number, leagueId: number) => ({
    queryKey: [season, leagueId],
    queryFn: () => getSeasonSchedule(season, leagueId),
  }),
});
