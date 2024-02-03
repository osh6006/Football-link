import { useQuery } from "@tanstack/react-query";
import { getSports } from "../apis/sports";
import { ISport } from "types";
import {
  getLiveMatches,
  getTeamStandings,
  getHomeNextMatchSchedule,
  getTopPlayers,
  getAllPlayers,
} from "hooks/services/apis/football";
import { getNaverNews } from "../apis/news";

export const footballQueryKey = {
  useTeamRankQuery: "footballTeamRankQuery",
  usePlayerRankQuery: "footballPlayerRankQuery",
  useLiveMathesQuery: "footballHomeLiveMathesQuery",
  useNextMatchQuery: "footballHomeNextMatchQuery",
  useTopPlayerQuery: "footballTopScorerQuery",
  useNewsQuery: "footballNewsQuery",
};

export const useTeamRankQuery = (league: string, season: string) => {
  return useQuery({
    queryKey: [footballQueryKey.useTeamRankQuery, league, season],
    queryFn: ({ queryKey }) =>
      getTeamStandings({ league: queryKey[1], season: queryKey[2] }),
    enabled: !!league && !!season,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [footballQueryKey.usePlayerRankQuery],
    queryFn: getSports,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useLiveMathesQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [footballQueryKey.useLiveMathesQuery, leagueId],
    queryFn: ({ queryKey }) => getLiveMatches(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
  });
};

export const useNextMatchQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [footballQueryKey.useNextMatchQuery, leagueId],
    queryFn: ({ queryKey }) => getHomeNextMatchSchedule(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useTopPlayerQuery = (
  type: string,
  season: string,
  leagueId: number,
) => {
  return useQuery({
    queryKey: [
      footballQueryKey.useTopPlayerQuery,
      {
        type: type,
        season: season,
        leagueId: leagueId,
      },
    ],
    queryFn: ({ queryKey }) =>
      getTopPlayers(
        queryKey[1] as {
          type: string;
          season: string;
          leagueId: number;
        },
      ),
    enabled: !!type && !!season && !!leagueId,
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

export const useNewsQuery = (query: string) => {
  return useQuery({
    queryKey: [footballQueryKey.useNewsQuery, query],
    queryFn: ({ queryKey }) => getNaverNews(queryKey[1]),
    enabled: !!query,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
