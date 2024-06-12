import {
  getLeagueSchedule,
  getSeasonSchedule,
} from "hooks/services/apis/schedule";
import { queries } from "../services/quries-key/index";
import { useQuery } from "@tanstack/react-query";
import { getHomeNextMatchSchedule } from "hooks/services/apis/football";

export const useNextMatchQuery = (leagueId: number) => {
  return useQuery({
    ...queries.schedules.nextMatch(leagueId),
    queryFn: () => getHomeNextMatchSchedule(leagueId),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useSeasonScheduleQuery = (season: number, leagueId: number) => {
  return useQuery({
    ...queries.schedules.season(season, leagueId),
    queryFn: () => getSeasonSchedule(season, leagueId),
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
    ...queries.schedules.all({ leagueId, season, start, end, date, teamId }),
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
