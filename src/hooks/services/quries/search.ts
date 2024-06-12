import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getPlayerSearch, getTeamSearch } from "../apis/search";

export const searches = createQueryKeys("searches", {
  teamSearch: (leagueId?: number, value?: string) => ({
    queryKey: [leagueId, value],
    queryFn: () => getTeamSearch(value as string),
  }),

  playerSearch: (leagueId?: number, value?: string) => ({
    queryKey: [leagueId, value],
    queryFn: () => getPlayerSearch(value as string, leagueId as number),
  }),
});
