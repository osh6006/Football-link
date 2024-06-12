import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getSports } from "../apis/sports";
import { getPlayerCareer, getPlayerInfo } from "../apis/football";

export const players = createQueryKeys("players", {
  rank: () => ({
    queryKey: ["rank"],
    queryFn: () => getSports(),
  }),
  info: (playerId: string) => ({
    queryKey: [playerId],
    queryFn: () => getPlayerInfo(playerId),
  }),
  career: (playerId: string) => ({
    queryKey: [playerId],
    queryFn: () => getPlayerCareer(playerId),
  }),
});
