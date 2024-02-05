import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getSports } from "../apis/sports";
import { ISport } from "types";
import {
  getLiveMatches,
  getTeamStandings,
  getHomeNextMatchSchedule,
  getTopPlayers,
} from "hooks/services/apis/football";
import { getGlobalNews, getNaverNews } from "../apis/news";

export const footballQueryKey = {
  useTeamRankQuery: "footballTeamRankQuery",
  usePlayerRankQuery: "footballPlayerRankQuery",
  useLiveMathesQuery: "footballHomeLiveMathesQuery",
  useNextMatchQuery: "footballHomeNextMatchQuery",
  useTopPlayerQuery: "footballTopScorerQuery",
  useLocalNewsQuery: "footballLocalNewsQuery",
  useGlobalNewsQuery: "footballGlobalNewsQuery",
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

export const useGlobalNewsQuery = (
  query: string,
  isUse: boolean,
  filter?: string,
) => {
  return useInfiniteQuery({
    queryKey: [footballQueryKey.useGlobalNewsQuery, query, filter],
    queryFn: ({ pageParam, queryKey }) =>
      getGlobalNews(queryKey[1]!, pageParam, queryKey[2]),
    initialPageParam: 1,
    enabled: !!query && !!isUse,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.status === "ok" && lastPage.articles.length > 0) {
        return pages.length + 1;
      }
      return undefined;
    },
    select(data) {
      return data.pages.flatMap((data) => data.articles);
    },
  });
};

// export const useGlobalNewsQuery = (
//   query: string,
//   isUse: boolean,
//   options?: string,
// ) => {
//   return useQuery({
//     queryKey: [footballQueryKey.useNewsQuery, query],
//     queryFn: ({ queryKey }) => getNaverNews(queryKey[1]),
//     enabled: !!query && isUse,
//     staleTime: Infinity,
//     gcTime: Infinity,
//   });
// };
// queryKey: [footballQueryKey.useNewsQuery, query],
// queryFn: ({ queryKey }) => getNaverNews(queryKey[1]),
// enabled: !!query && isUse,
// staleTime: Infinity,
// gcTime: Infinity,