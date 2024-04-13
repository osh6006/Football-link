import { rapidApi } from "libs/axios";
import { rapidFootballNextMatchesResponse } from "types/football";

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
  start?: string;
  end?: string;
  isAll?: boolean;
  date?: string;
  leagueId?: number;
  teamId?: string;
}): Promise<rapidFootballNextMatchesResponse[]> => {
  console.log(start, end, leagueId, season);

  try {
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
  } catch (error) {
    throw new Error("ERROR GET DATA IN GET_LEAGUE_SCHEDULE");
  }
};

export const getSeasonSchedule = async (
  season: number,
  leagueId: number,
): Promise<rapidFootballNextMatchesResponse[]> => {
  console.log(season, leagueId);

  try {
    const response = await rapidApi.get("/fixtures", {
      params: {
        league: leagueId,
        season: season,
        timezone: "Asia/Seoul",
      },
    });

    return response.data.response;
  } catch (error) {
    throw new Error("ERROR GET DATA IN GET_LEAGUE_SCHEDULE");
  }
};
