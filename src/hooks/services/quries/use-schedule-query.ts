import { useQuery } from "@tanstack/react-query";

import { getHomeNextMatchSchedule, getLeagueSchedule } from "../apis/football";

export const scheduleQueryKey = {
  useNextMatchQuery: "homeNextMatchQuery",
  useScheduleQuery: "scheduleQuery",
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

export const useScheduleQuery = ({
  leagueId,
  season,
  start,
  end,
  isAll,
  date,
  teamId,
}: {
  season: number;
  start: string;
  end: string;
  isAll: boolean;
  date: string;
  leagueId?: number;
  teamId?: string;
}) => {
  return useQuery({
    queryKey: [
      scheduleQueryKey.useScheduleQuery,
      { leagueId, season, start, end, isAll, date, teamId },
    ],
    queryFn: ({ queryKey }) =>
      getLeagueSchedule(
        queryKey[1] as {
          teamId: string;
          leagueId: number;
          season: number;
          start: string;
          end: string;
          isAll: boolean;
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
