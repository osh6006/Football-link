import { FileObject } from "@supabase/storage-js/src/lib/types";
import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "hooks/services/apis/banner";

export const useBannerQuery = () => {
  return useQuery<FileObject[]>({
    ...queries.banners.all,
    queryFn: () => getBanner(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
