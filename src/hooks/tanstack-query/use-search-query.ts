import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";

export const useTeamSearchQuery = (leagueId?: number, value?: string) => {
  return useQuery({
    ...queries.searches.teamSearch(leagueId, value),
    enabled: !!value && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerSearchQuery = (leagueId?: number, value?: string) => {
  return useQuery({
    ...queries.searches.playerSearch(leagueId, value),
    enabled: !!value && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
