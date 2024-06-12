import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getTeamInfo, getTeamSquad } from "../apis/football";

export const teams = createQueryKeys("teams", {
  info: (teamId: string, season: string) => ({
    queryKey: [teamId, season],
    queryFn: () => getTeamInfo(teamId as string, season),
  }),

  squad: (teamId: string) => ({
    queryKey: [teamId],
    queryFn: () => getTeamSquad(teamId),
  }),
});
