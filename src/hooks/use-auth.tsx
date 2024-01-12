import { useEffect } from "react";
import { useAuthStore } from "../stores/auth-store";
import { supabase } from "../libs/superbase-client";

export default function useAuth() {
  const { session, setSession } = useAuthStore();

  useEffect(() => {
    const authInit = async () => {
      const session = await supabase.auth.getSession().then((res) => {
        return res.data.session;
      });
      setSession(session);

      // hasFirst?
    };
    authInit();

    return () => {
      authInit();
    };
  }, [setSession]);

  return {
    session,
  };
}
