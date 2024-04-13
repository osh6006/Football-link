import { useQuery } from "@tanstack/react-query";

import { getHomeNextMatchSchedule } from "../apis/football";
import { getLeagueSchedule, getSeasonSchedule } from "../apis/schedule";

export const scheduleQueryKey = {
  useNextMatchQuery: "homeNextMatchQuery",
  useScheduleQuery: "scheduleQuery",
  useSeasonQuery: "seasonQuery",
};

export const useNextMatchQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [scheduleQueryKey.useNextMatchQuery, leagueId],
    queryFn: ({ queryKey }) => getHomeNextMatchSchedule(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useSeasonScheduleQuery = (season: number, leagueId: number) => {
  console.log(season, leagueId);

  return useQuery({
    queryKey: [scheduleQueryKey.useSeasonQuery, season, leagueId],
    queryFn: ({ queryKey }) => getSeasonSchedule(+queryKey[1], +queryKey[2]),
    select(data) {
      return data.sort((a, b) => {
        const dateA = new Date(a.fixture.date) as any;
        const dateB = new Date(b.fixture.date) as any;
        return dateA - dateB;
      });
    },
    enabled: !!season && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useScheduleQuery = ({
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
}) => {
  return useQuery({
    queryKey: [
      scheduleQueryKey.useScheduleQuery,
      { leagueId, season, start, end, date, teamId },
    ],
    queryFn: ({ queryKey }) =>
      getLeagueSchedule(
        queryKey[1] as {
          teamId: string;
          leagueId: number;
          season: number;
          start: string;
          end: string;
          date: string;
        },
      ),
    select(data) {
      return data.sort((a, b) => {
        const dateA = new Date(a.fixture.date) as any;
        const dateB = new Date(b.fixture.date) as any;
        return dateA - dateB;
      });
    },
    enabled: (!!season && !!start && !!end) || !!leagueId || !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
