import { rapidApi } from "libs/axios";

import {
  rapidFootballLiveMatchResponse,
  rapidFootballNextMatchesResponse,
  rapidFootballTeamStandingResponse,
} from "types/football";

const TIME_ZONE = "Asia/Seoul";

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

export const getHomeNextMatchSchedule = async (
  leagueId: number,
): Promise<rapidFootballNextMatchesResponse[]> => {
  return rapidApi
    .get("fixtures", {
      params: {
        league: leagueId,
        next: "1",
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

export const getTopScorers = async (leagueId: number, season: string) => {};
