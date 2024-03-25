import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getSports } from "../apis/sports";
import { ISport } from "types";
import {
  getTopPlayers,
  getLeagueSchedule,
  getTeamInfo,
  getTeamSquad,
  getPlayerInfo,
  getPlayerCareer,
} from "hooks/services/apis/football";
import { getNaverNews } from "../apis/news";

export const footballQueryKey = {
  usePlayerRankQuery: "footballPlayerRankQuery",
  useLocalNewsQuery: "footballLocalNewsQuery",
  useScheduleQuery: "footballScheduleQuery",
  useTeamInfoQuery: "footballTeamInfoQuery",
  useTeamSquadQuery: "footballTeamSquadQuery",
  usePlayerInfoQuery: "footballPlayerInfoQuery",
  usePlayerCareerQuery: "footballPlayerCareerQuery",
};

export const usePlayerRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [footballQueryKey.usePlayerRankQuery],
    queryFn: getSports,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// export const useAllPlayerQuery = (season: string, leagueId: string) => {
//   return useQuery({
//     queryKey: [
//       footballQueryKey.useFootballHomeTopScorerQuery,
//       season,
//       leagueId,
//     ],
//     queryFn: ({ queryKey }) =>
//       getAllPlayers(queryKey[1] as string, queryKey[2] as string),
//     enabled: !!season && !!leagueId,
//     staleTime: Infinity,
//     gcTime: Infinity,
//   });
// };

export const usePlayerInfoQuery = (playerId: string) => {
  return useQuery({
    queryKey: [footballQueryKey.usePlayerInfoQuery, playerId],
    queryFn: ({ queryKey }) => getPlayerInfo(queryKey[1]),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerCareerQuery = (playerId: string) => {
  return useQuery({
    queryKey: [footballQueryKey.usePlayerCareerQuery, playerId],
    queryFn: ({ queryKey }) => getPlayerCareer(queryKey[1]),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useLocalNewsQuery = (query: string, isUse: boolean) => {
  return useInfiniteQuery({
    queryKey: [footballQueryKey.useLocalNewsQuery, query],
    queryFn: ({ pageParam, queryKey }) => getNaverNews(queryKey[1], pageParam),
    initialPageParam: 1,
    enabled: !!query && !!isUse,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.start + 1;
      return lastPage.items.length === 0 ? undefined : nextPage;
    },
    select(data) {
      return data.pages.flatMap((data) => data.items);
    },
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
      footballQueryKey.useScheduleQuery,
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

export const useTeamInfoQuery = (teamId: string) => {
  return useQuery({
    queryKey: [footballQueryKey.useTeamInfoQuery, teamId],
    queryFn: ({ queryKey }) => getTeamInfo(queryKey[1] as string),
    enabled: !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useTeamSquadQuery = (teamId: string) => {
  return useQuery({
    queryKey: [footballQueryKey.useTeamSquadQuery, teamId],
    queryFn: ({ queryKey }) => getTeamSquad(queryKey[1]),
    enabled: !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
