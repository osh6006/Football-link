import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getLeaguesByCountryCode } from "../apis/league";

// queries/users.ts
export const leagues = createQueryKeys("leagues", {
  countryCode: (countryCode: string) => ({
    queryKey: [countryCode],
  }),
});
