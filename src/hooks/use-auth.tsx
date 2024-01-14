import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../libs/superbase-client";
import { useAuthStepStore } from "../stores/auth-step-store";

export default function useAuth() {
  const { setStep } = useAuthStepStore();
  const nav = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const userId = session?.user.id;

      if (userId) {
        let { data: sports } = await supabase
          .from("sports")
          .select()
          .eq("user_id", userId);

        if (sports && sports?.length > 0) {
          console.log("Has sports");
          nav("/");
        }

        if (userId && sports?.length === 0) {
          console.log("Not has sports");
          setStep(2);
        }
      }
    };

    checkSession();
  }, []);
  const signIn = async (provider: "google" | "github") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/auth`,
      },
    });

    if (error) {
      return error?.message;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    nav("/auth", { replace: true });
    return error?.message;
  };

  return { signOut, signIn };
}
