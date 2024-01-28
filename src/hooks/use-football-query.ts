import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { ISport } from "types";
import {
  getLiveMatches,
  getTeamStandings,
  getHomeNextMatchSchedule,
  getTopPlayers,
} from "services/football";

export const footballQueryKey = {
  useFootballTeamRankQuery: "footballTeamRankQuery",
  useFootballPlayerRankQuery: "footballPlayerRankQuery",
  useFootballHomeLiveMathesQuery: "useFootballHomeLiveMathesQuery",
  useFootballHomeNextMatchQuery: "useFootballHomeNextMatchQuery",
  useFootballHomeTopScorerQuery: "useFootballHomeTopScorerQuery",
  useFootballHomeTopAssistQuery: "useFootballHomeTopAssistQuery",
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

export const useFootballHomeNextMatchQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [footballQueryKey.useFootballHomeNextMatchQuery, leagueId],
    queryFn: ({ queryKey }) => getHomeNextMatchSchedule(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
  });
};

export const useFootballHomeTopPlayerQuery = (
  type: string,
  season: string,
  leagueId: number,
) => {
  return useQuery({
    queryKey: [
      footballQueryKey.useFootballHomeTopScorerQuery,
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
    select(data) {
      return data.filter((el: any, i: number) => i < 5);
    },
  });
};
