import { useQuery } from "@tanstack/react-query";
import { getMatchResult } from "../apis/match-result";

export const matchResultQueryKey = {
  useMatchResultQuery: "matchResultQuery",
};

export const useMatchResultQuery = (matchId?: string) => {
  return useQuery({
    queryKey: [matchResultQueryKey.useMatchResultQuery, matchId],
    queryFn: ({ queryKey }) => getMatchResult(queryKey[1] as string),
    enabled: !!matchId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
