import { useQuery } from "@tanstack/react-query";

import { getPlayerSearch, getTeamSearch } from "../apis/search";

export const searchQueryKey = {
  useTeamSearchQuery: "teamSearchQuery",
  usePlayerSearchQuery: "playerSearchQuery",
};

export const useTeamSearchQuery = (leagueId?: number, value?: string) => {
  return useQuery({
    queryKey: [searchQueryKey.useTeamSearchQuery, value],
    queryFn: ({ queryKey }) => getTeamSearch(queryKey[1] as string),
    enabled: !!value && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePlayerSearchQuery = (leagueId?: number, value?: string) => {
  return useQuery({
    queryKey: [searchQueryKey.usePlayerSearchQuery, value, leagueId],
    queryFn: ({ queryKey }) =>
      getPlayerSearch(queryKey[1] as string, queryKey[2] as number),
    enabled: !!value && !!leagueId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
