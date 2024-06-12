import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";

export const useLiveMathesQuery = (leagueId: number | null) => {
  return useQuery({
    ...queries.lives.lineup(leagueId!),
    enabled: !!leagueId,
    staleTime: 60000,
    gcTime: 60000,
  });
};

export const useLiveLineUpQuery = (fixtureId?: number) => {
  return useQuery({
    ...queries.lives.lineup(fixtureId!),
    enabled: !!fixtureId,
    staleTime: 60000,
    gcTime: 60000,
  });
};
