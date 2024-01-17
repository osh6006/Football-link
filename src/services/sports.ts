import toast from "react-hot-toast";
import { supabase } from "../libs/superbase-client";
import { Sports } from "../types";

export const getSports: () => Promise<Sports[] | null> = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    toast.error(error.message);
    return null;
  }

  const userId = data.session?.user.id;

  if (userId) {
    let { data: sports } = await supabase
      .from("sports")
      .select()
      .eq("user_id", userId);
    return sports;
  }

  toast.error("not userID");
  return null;
};
