import { useQuery } from "@tanstack/react-query";
import { getTeamStandings, getTopPlayers } from "../apis/football";

export const rankQueryKey = {
  teamRankQuery: "teamRankQuery",
  topPlayerQuery: "topPlayerQuery",
};

export const useTeamRankQuery = (
  league: number | string,
  season: string | number,
) => {
  return useQuery({
    queryKey: [rankQueryKey.teamRankQuery, league, season],
    queryFn: ({ queryKey }) =>
      getTeamStandings({
        league: (queryKey[1] + "") as string,
        season: queryKey[2] as string,
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
    queryKey: [
      rankQueryKey.topPlayerQuery,
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
