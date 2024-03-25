import { useQuery } from "@tanstack/react-query";
import {
  getLeagues,
  getLeaguesByCountryCode,
  getSavedLeague,
} from "hooks/services/apis/league";

export const leagueQueryKey = {
  useLeagueQuery: "leaguesQuery",
  saveLeagueQuery: "saveLeagueQuery",
  useLeagueQueryComboBox: "leagueQueryComboBox",
};

export const useLeagueQuery = (sportsId: string) => {
  return useQuery({
    queryKey: [leagueQueryKey.useLeagueQuery, sportsId],
    enabled: !!sportsId,
    queryFn: getLeagues,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useSaveLeagueQuery = (sportsId: string) => {
  return useQuery({
    queryKey: [leagueQueryKey.saveLeagueQuery, sportsId],
    enabled: !!sportsId,
    queryFn: getSavedLeague,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const useLeagueQueryComboBox = (countryCode?: string) => {
  return useQuery({
    queryKey: [leagueQueryKey.useLeagueQueryComboBox, countryCode],
    enabled: !!countryCode,
    queryFn: ({ queryKey }) => getLeaguesByCountryCode(queryKey[1] as string),
    select: (data) => {
      const parsingData = data.map((el) => {
        return {
          name: el.league.name,
          leagueId: el.league.id,
          flag: el.league.logo,
          season: el.seasons.at(-1)?.year || new Date().getFullYear() - 1,
        };
      });

      return parsingData;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
