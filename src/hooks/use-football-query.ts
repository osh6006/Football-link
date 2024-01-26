import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { ISport } from "types";

export const rankQueryKey = {
  useFootballTeamRankQuery: "footballTeamRankQuery",
  useFootballPlayerRankQuery: "footballPlayerRankQuery",
};

export const useFootballTeamRankQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [rankQueryKey.useFootballTeamRankQuery],
    queryFn: getSports,
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
