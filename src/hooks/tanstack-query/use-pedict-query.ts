import { getPredict } from "hooks/services/apis/predict";
import { queries } from "../services/quries-key/index";
import { useQuery } from "@tanstack/react-query";

export const predictQueryKey = {
  usePredictQuery: "predictQuery",
};

export const usePredictQuery = (homeId?: number, awayId?: number) => {
  return useQuery({
    ...queries.predicts.all(homeId, awayId),
    queryFn: () => getPredict(`${homeId}-${awayId}`),
    enabled: !!homeId && !!awayId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
