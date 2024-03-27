import { useQuery } from "@tanstack/react-query";
import { getPredict } from "../apis/predict";

export const predictQueryKey = {
  usePredictQuery: "predictQuery",
};

export const usePredictQuery = (homeId?: number, awayId?: number) => {
  return useQuery({
    queryKey: [predictQueryKey.usePredictQuery, homeId, awayId],
    queryFn: ({ queryKey }) => getPredict(`${queryKey[1]}-${queryKey[2]}`),
    enabled: !!homeId && !!awayId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
