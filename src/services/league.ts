import toast from "react-hot-toast";
import { supabase } from "libs/superbase-client";
import { QueryFunction } from "@tanstack/react-query";
import { ISupabaseLeague } from "types/football/league";

export const getLeagues: QueryFunction<
  ISupabaseLeague[] | null,
  string[]
> = async ({ queryKey }) => {
  const [, sportsId] = queryKey;
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return null;
  }

  const userId = sessionData.session?.user.id;

  if (userId && sportsId) {
    const { data: leagueData, error: leagueError } = await supabase
      .from("league")
      .select("*")
      .eq("sports_id", sportsId);

    if (leagueError) {
      toast.error(leagueError.message);
      return null;
    }

    return leagueData;
  }

  toast.error("not userId");
  return null;
};

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
        league(id,name,logo,sports_id)
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
