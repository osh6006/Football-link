import { rapidApi } from "libs/axios";

import {
  rapidFootballCoachInfoResponse,
  rapidFootballNextMatchesResponse,
  rapidFootballTeamDetailStandingResponse,
  rapidFootballTeamInfoResponse,
  rapidFootballTeamStandingResponse,
  rapidPlayerResponse,
} from "types/football";
import {
  rapidFootballTeamLeaguesResponse,
  rapidFootballTeamSquadStandingResponse,
} from "types/football/team";

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

export const getPlayerInfo = async (
  playerId: string,
): Promise<rapidPlayerResponse> => {
  return await rapidApi
    .get(`players`, {
      params: {
        id: playerId,
        season: new Date().getFullYear() - 1,
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

export const getPlayerCareer = async (
  playerId: string,
): Promise<
  {
    league: string;
    country: string;
    place: string;
    season: string;
  }[]
> => {
  return await rapidApi
    .get(`trophies`, {
      params: {
        player: playerId,
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
  teamId,
}: {
  season: number;
  start: string;
  end: string;
  isAll: boolean;
  date: string;
  leagueId?: number;
  teamId?: string;
}): Promise<rapidFootballNextMatchesResponse[]> => {
  console.log(start, end, leagueId, season);

  try {
    if (isAll) {
      const response = await rapidApi.get("/fixtures", {
        params: {
          league: leagueId,
          season: season,
          from: start,
          to: end,
          team: teamId,
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
          team: teamId,
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
  season: string,
): Promise<{
  teamInfo: rapidFootballTeamInfoResponse;
  coachInfo: rapidFootballCoachInfoResponse;
  teamAllStanding: rapidFootballTeamDetailStandingResponse[];
  teamPlayLeagues: rapidFootballTeamLeaguesResponse[];
}> => {
  try {
    const teamInfo = await rapidApi
      .get("teams", {
        params: {
          id: teamId,
        },
      })
      .then((res) => {
        return res.data.response[0];
      });

    const coachInfo = await rapidApi
      .get("coachs", {
        params: {
          team: teamId,
        },
      })
      .then((res) => {
        return res.data.response[res.data.response.length - 1];
      });

    const teamAllStanding = await rapidApi
      .get("standings", {
        params: {
          season: season,
          team: teamId,
        },
      })
      .then((res) => {
        return res.data.response;
      });

    const teamPlayLeagues = await rapidApi
      .get("leagues", {
        params: {
          season: season,
          team: teamId,
        },
      })
      .then((res) => {
        return res.data.response;
      });

    return { teamInfo, coachInfo, teamAllStanding, teamPlayLeagues };
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
