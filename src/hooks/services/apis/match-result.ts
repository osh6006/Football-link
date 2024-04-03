import { rapidApi } from "libs/axios";
import { rapidFootballTeamLeaguesResponse } from "types";

export const getMatchResult = async (
  matchId: string,
): Promise<rapidFootballTeamLeaguesResponse> => {
  return await rapidApi
    .get("fixtures", {
      params: {
        id: matchId,
      },
    })
    .then((res) => {
      return res.data.response[0];
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.response.data.message);
    });
};
