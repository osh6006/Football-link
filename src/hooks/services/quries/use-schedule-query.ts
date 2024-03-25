import { useQuery } from "@tanstack/react-query";

import { getHomeNextMatchSchedule } from "../apis/football";

export const footballQueryKey = {
  useNextMatchQuery: "homeNextMatchQuery",
};

export const useNextMatchQuery = (leagueId: number) => {
  return useQuery({
    queryKey: [footballQueryKey.useNextMatchQuery, leagueId],
    queryFn: ({ queryKey }) => getHomeNextMatchSchedule(queryKey[1] as number),
    enabled: !!leagueId,
    select(data) {
      return data[0];
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
