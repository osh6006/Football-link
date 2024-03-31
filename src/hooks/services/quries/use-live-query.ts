import { useQuery } from "@tanstack/react-query";
import { getLineUp, getLiveMatches } from "../apis/live";

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

export const useLiveLineUpQuery = (fixtureId?: number) => {
  return useQuery({
    queryKey: [liveQueryKey.useLiveMathesQuery, fixtureId],
    queryFn: ({ queryKey }) => getLineUp(queryKey[1] as number),
    enabled: !!fixtureId,
    staleTime: 60000,
    gcTime: 60000,
  });
};
