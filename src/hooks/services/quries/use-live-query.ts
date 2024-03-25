import { useQuery } from "@tanstack/react-query";
import { getLiveMatches } from "../apis/football";

export const liveQueryKey = {
  useLiveMathesQuery: "footballHomeLiveMathesQuery",
};

export const useLiveMathesQuery = (leagueId: number | null) => {
  return useQuery({
    queryKey: [liveQueryKey.useLiveMathesQuery, leagueId],
    queryFn: ({ queryKey }) => getLiveMatches(queryKey[1] as number),
    enabled: !!leagueId,
    staleTime: 60000,
    gcTime: 60000,
  });
};
