import toast from "react-hot-toast";
import { supabase } from "../libs/superbase-client";
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
      .eq("user_id", userId);

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
