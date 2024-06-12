import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";

export const usePlayerRankQuery = () => {
  return useQuery({
    ...queries.players.rank(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerInfoQuery = (playerId: string) => {
  return useQuery({
    ...queries.players.info(playerId),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerCareerQuery = (playerId: string) => {
  return useQuery({
    ...queries.players.career(playerId),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
