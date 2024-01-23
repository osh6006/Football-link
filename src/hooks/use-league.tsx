import { useQuery } from "@tanstack/react-query";
import { getLeagues, getSavedLeague } from "services/league";

export const useLeagueQuery = (sportsId: string) => {
  return useQuery({
    queryKey: ["leaguesQuery", sportsId],
    enabled: !!sportsId,
    queryFn: getLeagues,
  });
};

export const useSaveLeagueQuery = () => {
  return useQuery({
    queryKey: ["saveLeagueQuery"],
    queryFn: getSavedLeague,
  });
};
