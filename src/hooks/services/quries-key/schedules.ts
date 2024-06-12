import { createQueryKeys } from "@lukemorales/query-key-factory";

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
  }),

  nextMatch: (leagueId: number) => ({
    queryKey: [leagueId],
  }),
  season: (season: number, leagueId: number) => ({
    queryKey: [season, leagueId],
  }),
});
