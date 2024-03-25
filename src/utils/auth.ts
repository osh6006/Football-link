import { supabase } from "libs/superbase-client";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

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

export const protectedHomePage = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) return toast.error("로그인 체크 중 에러가 발생하였습니다.");
  if (session) return null;

  return redirect("/login");
};

export const protectedLoginPage = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session) return redirect("/");
  if (error) return toast.error("로그인 체크 중 에러가 발생하였습니다.");

  return null;
};
