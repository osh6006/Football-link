import React, { useEffect } from "react";
import { supabase } from "../libs/superbase-client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  children,
}) => {
  const nav = useNavigate();

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
        let { data: sports } = await supabase
          .from("sports")
          .select()
          .eq("user_id", userId);

        if (sports && sports?.length > 0) {
          console.log("Has sports");
          return;
        }

        if (userId && sports?.length === 0) {
          console.log("Not has sports");
          nav("/auth", { replace: false });
        }
      } else {
        console.log("not has session user");
        nav("/auth", { replace: false });
      }
    };

    checkSession();
  }, [nav]);

  return <>{children}</>;
};

export default ProtectedRoute;
