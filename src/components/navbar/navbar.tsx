import clsx from "clsx";

import useAuth from "../../hooks/use-auth";
import useThemeStore from "../../stores/theme-store";

import Button from "../common/button";
import AvatarMenu from "./avatar-menu";
import usePath from "../../hooks/use-path";
import { SearchIcon } from "lucide-react";

const Navbar = () => {
  const { user } = useAuth();
  const { theme } = useThemeStore();

  const { pathNameKor } = usePath();

  return (
    <nav
      className={clsx(
        `sticky left-0 top-0 z-30 flex h-[55px] w-full items-center border-b border-MediumGrey px-4 capitalize text-MediumGrey`,
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="flex-1 text-xl font-semibold">{pathNameKor}</div>

      <div className="flex items-center gap-x-2">
        {user ? (
          <>
            <button
              onClick={() => {}}
              className="transition-colors hover:text-Main"
            >
              <SearchIcon />
            </button>
            <AvatarMenu user={user} size="md" />
          </>
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
