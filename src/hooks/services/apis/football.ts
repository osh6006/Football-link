import { rapidApi } from "libs/axios";

import {
  rapidFootballLiveMatchResponse,
  rapidFootballNextMatchesResponse,
  rapidFootballTeamStandingResponse,
  rapidPlayerResponse,
} from "types/football";

const TIME_ZONE = "Asia/Seoul";

export const getTeamStandings = async (params: {
  league: string;
  season: string;
}): Promise<rapidFootballTeamStandingResponse> => {
  return await rapidApi
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

export const getHomeNextMatchSchedule = async (
  leagueId: number,
): Promise<rapidFootballNextMatchesResponse[]> => {
  return await rapidApi
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

export const getTopPlayers = async (params: {
  type: string;
  season: string;
  leagueId: number;
}): Promise<rapidPlayerResponse[]> => {
  return await rapidApi
    .get(`players/${params.type}`, {
      params: {
        season: params.season,
        league: params.leagueId,
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
