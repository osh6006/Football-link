import { getSports } from "hooks/services/apis/sports";
import { queries } from "../services/quries-key/index";
import { useQuery } from "@tanstack/react-query";
import { getPlayerCareer, getPlayerInfo } from "hooks/services/apis/football";

export const usePlayerRankQuery = () => {
  return useQuery({
    ...queries.players.rank(),
    queryFn: () => getSports(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerInfoQuery = (playerId: string) => {
  return useQuery({
    ...queries.players.info(playerId),
    queryFn: () => getPlayerInfo(playerId),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerCareerQuery = (playerId: string) => {
  return useQuery({
    ...queries.players.career(playerId),
    queryFn: () => getPlayerCareer(playerId),
    enabled: !!playerId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
