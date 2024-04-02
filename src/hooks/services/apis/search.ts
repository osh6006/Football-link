import { rapidApi } from "libs/axios";
import { IPlayerSearchResult, ITeamSearchResult } from "types";

export const getTeamSearch = async (
  value: string,
): Promise<ITeamSearchResult[]> => {
  return await rapidApi
    .get("teams", {
      params: {
        search: value,
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

export const getPlayerSearch = async (
  value: string,
  league: number,
): Promise<IPlayerSearchResult[]> => {
  return await rapidApi
    .get("players", {
      params: {
        search: value,
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
