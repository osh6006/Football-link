import { useQuery } from "@tanstack/react-query";
import { getBanner } from "hooks/services/apis/banner";

export const bannerQueryKey = {
  useBannerQuery: "bannerQuery",
};

export const useBannerQuery = (sports: string, leagueId: number) => {
  return useQuery({
    queryKey: [bannerQueryKey.useBannerQuery, sports, leagueId],
    queryFn: ({ queryKey }) =>
      getBanner(queryKey[1] as string, queryKey[2] as number),
    enabled: !!sports && !!leagueId,
  });
};
