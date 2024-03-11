import toast from "react-hot-toast";
import { supabase } from "../../../libs/superbase-client";
import { ISport } from "types";

export const getSports: () => Promise<ISport[] | null> = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    toast.error(error.message);
    return null;
  }

  const userId = data.session?.user.id;

  if (userId) {
    let { data: sports, error } = await supabase
      .from("user_sports")
      .select("*")
      .eq("user_id", userId)
      .order("created_at");

    if (error) {
      toast.error(error.message);
      return null;
    }

    if (sports) {
      const sportsDetails = await Promise.all(
        sports.map(async (selectedSport) => {
          const { data: sportDetail, error: sportError } = await supabase
            .from("sports")
            .select("*")
            .eq("id", selectedSport.sport_id)
            .single();

          if (sportError) {
            toast.error(sportError.message);
            return null;
          }

          return sportDetail;
        }),
      );

      return sportsDetails as ISport[];
    }
  }

  toast.error("not userID");
  return null;
};

export const getServerSports: () => Promise<ISport[] | null> = async () => {
  let { data: sports, error } = await supabase.from("sports").select("*");

  if (error) {
    toast.error(error.message);
    return null;
  }
  return sports as ISport[];
};

export const deleteUserSupabaseSports = async () => {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return false;
  }

  const userId = sessionData.session?.user.id;

  const { data, error } = await supabase
    .from("user_sports")
    .select()
    .eq("user_id", userId!);

  if (error) return false;

  if (userId && data) {
    for (const item of data) {
      const { error } = await supabase
        .from("user_sports")
        .delete()
        .eq("id", item.id);

      if (error) {
        toast.error(error.message);
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

export const insertAllSupabaseSports = async (items: ISport[]) => {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    toast.error(sessionError.message);
    return false;
  }

  const userId = sessionData.session?.user.id;

  if (userId) {
    for (const item of items) {
      const { error } = await supabase.from("user_sports").insert({
        sport_id: item.id,
        user_id: userId,
      });

      if (error) {
        console.log(error);
        toast.error(error.message);
        return false;
      }
    }
  }

  return true;
};
