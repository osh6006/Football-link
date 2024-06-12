import { queries } from "../services/quries-key/index";
import { useQuery } from "@tanstack/react-query";

export const useTeamInfoQuery = (teamId: string, season: string) => {
  return useQuery({
    ...queries.teams.info(teamId, season),
    enabled: !!teamId && !!season,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useTeamSquadQuery = (teamId: string) => {
  return useQuery({
    ...queries.teams.squad(teamId),
    enabled: !!teamId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
