import { useQuery } from "@tanstack/react-query";
import { getSports } from "../services/sports";
import { Sports } from "../types";

export const useSportsQuery = () => {
  return useQuery<Sports[] | null>({
    queryKey: ["sportsQuery"],
    queryFn: getSports,
    retry: false,
    select(data) {
      return data;
    },
  });
};
