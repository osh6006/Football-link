import { useNavigate } from "react-router-dom";

import { supabase } from "../libs/superbase-client";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function useAuth() {
  const nav = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
      }
    };

    checkUser();
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
