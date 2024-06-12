import toast from "react-hot-toast";
import { supabase } from "libs/superbase-client";
import { QueryFunction } from "@tanstack/react-query";
import { ISupabaseLeague } from "types/football/league";
import { ILeagueResponse } from "types";
import { rapidApi } from "libs/axios";

export const getSavedLeague: QueryFunction<any | null, string[]> = async ({
  queryKey,
}) => {
  const [, sportsId] = queryKey;
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return null;
  }

  const userId = sessionData.session?.user.id;

  if (userId) {
    const { data: leagueData, error: leagueError } = await supabase
      .from("user_leagues")
      .select(
        `
        league(id,name,logo,sports_id,rapid_football_league_id,kr_name)
      `,
      )
      .eq("user_id", userId);
    if (leagueError) {
      toast.error(leagueError.message);
      return null;
    }

    return leagueData.filter((el) => el.league?.sports_id === sportsId);
  }

  toast.error("not userId");
  return null;
};

export const getSupabaseLeague = async () => {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return null;
  }

  const userId = sessionData.session?.user.id;

  if (userId) {
    const { data: leagueData, error: leagueError } = await supabase
      .from("user_leagues")
      .select(
        `
        league_id(
          id
        )
      `,
      )
      .eq("user_id", userId);
    if (leagueError) {
      toast.error(leagueError.message);
      return null;
    }

    return leagueData;
  }

  toast.error("not userId");
  return null;
};

export const deleteAllSupabaseLeague = async (items: ISupabaseLeague[]) => {
  for (const item of items) {
    const { error } = await supabase
      .from("user_leagues")
      .delete()
      .eq("league_id", item.id);

    if (error) {
      toast.error(error.message);
      return false;
    }
  }

  return true;
};

export const insertAllSupabaseLeague = async (items: ISupabaseLeague[]) => {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return null;
  }

  const userId = sessionData.session?.user.id;

  if (userId) {
    for (const item of items) {
      const { error } = await supabase.from("user_leagues").insert({
        league_id: item.id,
        user_id: userId,
      });

      if (error) {
        toast.error(error.message);
        return false;
      }
    }
  }
};

export const getLeaguesByCountryCode = async (
  countryCode: string,
): Promise<ILeagueResponse[]> => {
  return rapidApi
    .get("/leagues", {
      params: {
        code: countryCode,
      },
    })
    .then((res) => res.data.response)
    .catch((error) => {
      throw new Error("Get LeaguesByCountryCode Error", error);
    });
};
