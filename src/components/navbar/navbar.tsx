import clsx from "clsx";
import useThemeStore from "../../stores/theme-store";
import { useMatches } from "react-router-dom";
import Avatar from "../common/avatar";
import useAuth from "../../hooks/use-auth";
import Button from "../common/button";

const Navbar = () => {
  const { user } = useAuth();
  const { theme } = useThemeStore();
  const { pathname } = useMatches()[1] || [];
  let newPath = pathname?.replace(/\//g, "") || "";

  console.log(user);

  return (
    <nav
      className={clsx(
        `fix  inset-x-0 top-0 flex h-[55px] items-center  border-b border-MediumGrey px-4 capitalize text-MediumGrey`,
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="flex-1">{newPath}</div>
      <div className="">
        {user ? (
          <Avatar imgUrl={user.user_metadata.avatar_url} size="md" />
        ) : (
          <Button onClick={() => {}} size="sm">
            로그인
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
