import { useQuery } from "@tanstack/react-query";
import { getSports } from "../apis/sports";
import { ISport } from "types";
import { getPlayerInfo, getPlayerCareer } from "hooks/services/apis/football";

export const footballQueryKey = {
  usePlayerRankQuery: "footballPlayerRankQuery",
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
