import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { ISport } from "types";
import { getTeamStandings } from "services/football";

export const rankQueryKey = {
  useFootballTeamRankQuery: "footballTeamRankQuery",
  useFootballPlayerRankQuery: "footballPlayerRankQuery",
};

export const useFootballTeamRankQuery = (league: string, season: string) => {
  return useQuery({
    queryKey: [rankQueryKey.useFootballTeamRankQuery, league, season],
    queryFn: ({ queryKey }) =>
      getTeamStandings({ league: queryKey[1], season: queryKey[2] }),
    enabled: !!league && !!season,
    retry: false,
    select(data) {
      return data;
    },
  });
};

export const useFootballPlayerRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [rankQueryKey.useFootballPlayerRankQuery],
    queryFn: getSports,
    retry: false,
    select(data) {
      return data;
    },
  });
};
