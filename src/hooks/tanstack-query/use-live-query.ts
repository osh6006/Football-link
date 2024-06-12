import { getLineUp, getLiveMatches } from "hooks/services/apis/live";
import { queries } from "../services/quries-key/index";
import { useQuery } from "@tanstack/react-query";

export const useLiveMathesQuery = (leagueId: number | null) => {
  return useQuery({
    ...queries.lives.live(leagueId!),
    queryFn: () => getLiveMatches(leagueId as number),
    enabled: !!leagueId,
    staleTime: 60000,
    gcTime: 60000,
  });
};

export const useLiveLineUpQuery = (fixtureId?: number) => {
  return useQuery({
    ...queries.lives.lineup(fixtureId!),
    queryFn: () => getLineUp(fixtureId as number),
    enabled: !!fixtureId,
    staleTime: 60000,
    gcTime: 60000,
  });
};
