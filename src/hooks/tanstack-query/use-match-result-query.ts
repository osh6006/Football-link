import { queries } from "hooks/services/quries-key";
import { useQuery } from "@tanstack/react-query";
import { getMatchResult } from "../services/apis/match-result";

export const useMatchResultQuery = (matchId?: string) => {
  return useQuery({
    ...queries.matchResult.all(matchId!),
    queryFn: () => getMatchResult(matchId as string),
    enabled: !!matchId,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
