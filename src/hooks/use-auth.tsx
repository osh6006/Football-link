import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../libs/superbase-client";
import { useAuthStepStore } from "../stores/auth-step-store";
import toast from "react-hot-toast";
import { User } from "@supabase/gotrue-js";

export default function useAuth() {
  const { setStep } = useAuthStepStore();
  const nav = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        toast.error(error.message);
        return;
      }

      const userId = session?.user.id;

      if (userId) {
        setUser(session.user);
        let { data: sports } = await supabase
          .from("sports")
          .select()
          .eq("user_id", userId);

        if (sports && sports?.length > 0) {
          console.log("Has sports");
          nav("/", { replace: false });
        }

        if (userId && sports?.length === 0) {
          console.log("Not has sports");
          nav("/auth", { replace: false });
          setStep(2);
        }
      } else {
        console.log("not has session user");
        nav("/auth", { replace: false });
      }
    };

    checkSession();
  }, [nav, setStep]);

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
      toast.error(error.message);
      return error.message;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return error.message;
    }
    nav("/auth", { replace: true });
  };

  return { signOut, signIn, user };
}
