import { rapidApi } from "libs/axios";

import {
  rapidFootballCoachInfoResponse,
  rapidFootballLiveMatchResponse,
  rapidFootballNextMatchesResponse,
  rapidFootballTeamDetailStandingResponse,
  rapidFootballTeamInfoResponse,
  rapidFootballTeamStandingResponse,
  rapidPlayerResponse,
} from "types/football";
import { rapidFootballTeamSquadStandingResponse } from "types/football/team";

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

export const getAllPlayers = async (
  season: string,
  league: string,
  page = 1,
  playersData: any[] = [],
) => {
  const players = await rapidApi("players", {
    params: {
      league: league,
      season: season,
      page: page,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("get AllFootBallPlayers Error", error);
    });

  playersData = [...playersData, ...players.response];

  if (players.paging.current < players.paging.total) {
    const nextPage = players.paging.current + 1;
    if (nextPage % 2 === 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Sleep for 1 second
    }
    playersData = await getAllPlayers(season, league, nextPage, playersData);
  }

  return playersData;
};

export const getLeagueSchedule = async ({
  leagueId,
  season,
  start,
  end,
  isAll,
  date,
}: {
  leagueId: number;
  season: number;
  start: string;
  end: string;
  isAll: boolean;
  date: string;
}): Promise<rapidFootballNextMatchesResponse[]> => {
  try {
    if (isAll) {
      const response = await rapidApi.get("/fixtures", {
        params: {
          league: leagueId,
          season: season,
          from: start,
          to: end,
          timezone: "Asia/Seoul",
        },
      });
      return response.data.response;
    } else {
      const response = await rapidApi.get("/fixtures", {
        params: {
          league: leagueId,
          season: season,
          date: date,
          timezone: "Asia/Seoul",
        },
      });
      return response.data.response;
    }
  } catch (error) {
    throw new Error("ERROR GET DATA IN GET_LEAGUE_SCHEDULE");
  }
};

export const getTeamInfo = async (
  teamId: string,
): Promise<{
  teamInfo: rapidFootballTeamInfoResponse;
  coachInfo: rapidFootballCoachInfoResponse;
  teamStanding: rapidFootballTeamDetailStandingResponse[];
}> => {
  try {
    const teamInfo = await rapidApi
      .get("teams", {
        params: {
          id: teamId,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.response[0];
      });

    const coachInfo = await rapidApi
      .get("coachs", {
        params: {
          team: teamId,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.response[0];
      });

    const teamStanding = await rapidApi
      .get("standings", {
        params: {
          season: new Date().getFullYear() - 1,
          team: teamId,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data.response;
      });

    return { teamInfo, coachInfo, teamStanding };
  } catch (error) {
    console.log(error);
    throw new Error("getTeamInfo");
  }
};

export const getTeamSquad = async (
  teamId: string,
): Promise<rapidFootballTeamSquadStandingResponse> => {
  return await rapidApi
    .get("players/squads", {
      params: {
        team: teamId,
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
