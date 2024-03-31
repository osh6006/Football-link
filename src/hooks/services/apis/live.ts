import { rapidApi } from "libs/axios";
import {
  rapidFootballLineUpResponse,
  rapidFootballLiveMatchResponse,
} from "types/football";

const TIME_ZONE = "Asia/Seoul";

export const getLiveMatches = async (
  leagueId: number,
): Promise<rapidFootballLiveMatchResponse[]> => {
  return await rapidApi
    .get("fixtures", {
      params: {
        live: "all",
        league: leagueId,
        timezone: TIME_ZONE,
      },
    })
    .then((res) => {
      return res.data.response;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.response.data.message);
    });
};

export const getLineUp = async (
  fixtureId: number,
): Promise<rapidFootballLineUpResponse[]> => {
  return await rapidApi
    .get("fixtures/lineups", {
      params: {
        fixture: fixtureId,
      },
    })
    .then((res) => {
      return res.data.response;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.response.data.message);
    });
};
