import { rapidApi } from "libs/axios";
import toast from "react-hot-toast";

import { rapidFootballTeamStandingResponse } from "types/football";

export const getTeamStandings = (params: {
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
      toast.error(error.response.data.message);
    });
};
