import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { ISport } from "types";

export const useSportsQuery = () => {
  return useQuery<ISport[] | null>({
    queryKey: ["sportsQuery"],
    queryFn: getSports,
    retry: false,
    select(data) {
      return data;
    },
  });
};
