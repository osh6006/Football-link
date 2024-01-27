import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { ISport } from "types";
import { getLiveMatches, getTeamStandings } from "services/football";

export const footballQueryKey = {
  useFootballTeamRankQuery: "footballTeamRankQuery",
  useFootballPlayerRankQuery: "footballPlayerRankQuery",
  useFootballHomeLiveMathesQuery: "footballLiveMatchesQuery",
};

export const useFootballTeamRankQuery = (league: string, season: string) => {
  return useQuery({
    queryKey: [footballQueryKey.useFootballTeamRankQuery, league, season],
    queryFn: ({ queryKey }) =>
      getTeamStandings({ league: queryKey[1], season: queryKey[2] }),
    enabled: !!league && !!season,
  });
};

export const useFootballPlayerRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [footballQueryKey.useFootballPlayerRankQuery],
    queryFn: getSports,
  });
};

export const useFootballHomeLiveMathesQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [footballQueryKey.useFootballHomeLiveMathesQuery, leagueId],
    queryFn: ({ queryKey }) => getLiveMatches(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
  });
};
