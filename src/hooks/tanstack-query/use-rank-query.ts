import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";

export const useTeamRankQuery = (
  league: number | string,
  season: string | number,
) => {
  return useQuery({
    ...queries.ranks.teamRank(league, season),
    select: (data) => {
      return data;
    },
    enabled: !!league && !!season,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useTopPlayerQuery = (
  type: string,
  season: string | number,
  leagueId: number,
) => {
  return useQuery({
    ...queries.ranks.topPlayer(type, season, leagueId),
    enabled: !!type && !!season && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
