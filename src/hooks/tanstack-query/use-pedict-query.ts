import { queries } from "./../services/quries/index";
import { useQuery } from "@tanstack/react-query";

export const predictQueryKey = {
  usePredictQuery: "predictQuery",
};

export const usePredictQuery = (homeId?: number, awayId?: number) => {
  return useQuery({
    ...queries.predicts.all(homeId, awayId),
    enabled: !!homeId && !!awayId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
