import { useQuery } from "@tanstack/react-query";
import { ISport } from "types";
import { getPlayerCareer, getPlayerInfo } from "../apis/football";
import { getSports } from "../apis/sports";

export const player1QueryKey = {
  usePlayerRankQuery: "playerRankQuery",
  usePlayerInfoQuery: "playerInfoQuery",
  usePlayerCareerQuery: "playerCareerQuery",
};

export const usePlayerRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [player1QueryKey.usePlayerRankQuery],
    queryFn: getSports,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerInfoQuery = (playerId: string) => {
  return useQuery({
    queryKey: [player1QueryKey.usePlayerInfoQuery, playerId],
    queryFn: ({ queryKey }) => getPlayerInfo(queryKey[1]),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerCareerQuery = (playerId: string) => {
  return useQuery({
    queryKey: [player1QueryKey.usePlayerCareerQuery, playerId],
    queryFn: ({ queryKey }) => getPlayerCareer(queryKey[1]),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
