import { useQuery } from "@tanstack/react-query";
import { getSports } from "../apis/sports";
import { ISport } from "types";

export const sportsQueryKey = {
  useSportsQuery: "sportsQuery",
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
