import { useQuery } from "@tanstack/react-query";
import { getBanner } from "hooks/services/apis/banner";

export const bannerQueryKey = {
  useBannerQuery: "bannerQuery",
};

export const useBannerQuery = () => {
  return useQuery({
    queryKey: [bannerQueryKey.useBannerQuery],
    queryFn: ({ queryKey }) => getBanner(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
