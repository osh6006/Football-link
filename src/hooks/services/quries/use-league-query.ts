import { useQuery } from "@tanstack/react-query";
import { getLeagues, getSavedLeague } from "hooks/services/apis/league";

export const leagueQueryKey = {
  useLeagueQuery: "leaguesQuery",
  saveLeagueQuery: "saveLeagueQuery",
};

export const useLeagueQuery = (sportsId: string) => {
  return useQuery({
    queryKey: [leagueQueryKey.useLeagueQuery, sportsId],
    enabled: !!sportsId,
    queryFn: getLeagues,
  });
};

export const useSaveLeagueQuery = (sportsId: string) => {
  return useQuery({
    queryKey: [leagueQueryKey.saveLeagueQuery, sportsId],
    enabled: !!sportsId,
    queryFn: getSavedLeague,
  });
};
