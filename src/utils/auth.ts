import { supabase } from "libs/superbase-client";

export const checkAuthSports = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log(error);
    return { auth: false, hasSports: false };
  }

  const userId = session?.user.id;

  if (userId) {
    let { data: sports, error } = await supabase
      .from("user_sports")
      .select()
      .eq("user_id", userId);

    if (error) {
      return { auth: true, hasSports: false };
    }

    if (sports && sports?.length > 0) {
      return { auth: true, hasSports: true };
    }

    if (userId && sports?.length === 0) {
      return { auth: true, hasSports: false };
    }
  } else {
    return { auth: false, hasSports: false };
  }
  return { auth: false, hasSports: false };
};
