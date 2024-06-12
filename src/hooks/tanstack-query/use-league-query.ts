import { useQuery } from "@tanstack/react-query";
import { getLeaguesByCountryCode } from "hooks/services/apis/league";
import { queries } from "hooks/services/quries-key";

export const useLeagueQueryComboBox = (countryCode?: string) => {
  return useQuery({
    ...queries.leagues.countryCode(countryCode!),
    queryFn: () => getLeaguesByCountryCode(countryCode as string),
    enabled: !!countryCode,
    select: (data) => {
      const parsingData = data.map((el) => {
        return {
          name: el.league.name,
          leagueId: el.league.id,
          flag: el.league.logo,
          season: el.seasons.at(-1)?.year || new Date().getFullYear() - 1,
          possibleSeasons: el.seasons,
        };
      });

      return parsingData;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
