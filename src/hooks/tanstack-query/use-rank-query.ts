import { getTeamStandings, getTopPlayers } from "hooks/services/apis/football";
import { queries } from "../services/quries-key/index";
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
    queryFn: () =>
      getTeamStandings({
        league: league as string,
        season: season as string,
      }),
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
    queryFn: () =>
      getTopPlayers({
        type,
        season,
        leagueId,
      } as {
        type: string;
        season: string;
        leagueId: number;
      }),
    enabled: !!type && !!season && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
