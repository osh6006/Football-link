import clsx from "clsx";

import useAuth from "../../hooks/use-auth";
import useThemeStore from "../../stores/theme-store";

import Button from "../common/button";
import AvatarMenu from "./avatar-menu";
import usePath from "../../hooks/use-path";

const Navbar = () => {
  const { user } = useAuth();
  const { theme } = useThemeStore();

  const { pathNameKor } = usePath();

  return (
    <nav
      className={clsx(
        `sticky top-0 z-20 flex h-[55px] w-full items-center  border-b border-MediumGrey px-4 capitalize text-MediumGrey`,
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="flex-1">{pathNameKor}</div>

      <div className="">
        {user ? (
          <AvatarMenu user={user} size="md" />
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
