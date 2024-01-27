import { rapidApi } from "libs/axios";

import { rapidFootballTeamStandingResponse } from "types/football";
import { rapidFootballLiveMatchResponse } from "types/football/live";

export const getTeamStandings = async (params: {
  league: string | unknown;
  season: string | unknown;
}): Promise<rapidFootballTeamStandingResponse> => {
  return rapidApi
    .get("standings", {
      params: {
        season: params.season,
        league: params.league,
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

export const getLiveMatches = async (
  leagueId: number,
): Promise<rapidFootballLiveMatchResponse[]> => {
  return rapidApi
    .get("fixtures", {
      params: {
        live: "all",
        league: leagueId,
        timezone: "Asia/Seoul",
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
