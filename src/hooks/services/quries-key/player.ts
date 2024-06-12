import { createQueryKeys } from "@lukemorales/query-key-factory";

export const players = createQueryKeys("players", {
  rank: () => ({
    queryKey: ["rank"],
  }),
  info: (playerId: string) => ({
    queryKey: [playerId],
  }),
  career: (playerId: string) => ({
    queryKey: [playerId],
  }),
});
