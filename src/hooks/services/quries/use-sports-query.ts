import { useQuery } from "@tanstack/react-query";
import { getServerSports, getSports } from "../apis/sports";
import { ISport } from "types";

export const sportsQueryKey = {
  useSportsQuery: "sportsQuery",
  useServerSportsQuery: "serverSportsQuery",
};

export const useSportsQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [sportsQueryKey.useSportsQuery],
    queryFn: getSports,
    select(data) {
      return data;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useServerSportsQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: [sportsQueryKey.useServerSportsQuery],
    queryFn: getServerSports,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
