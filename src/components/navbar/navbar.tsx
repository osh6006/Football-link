import clsx from "clsx";

import useAuth from "../../hooks/use-auth";
import useThemeStore from "../../stores/theme-store";

import Button from "../common/button";
import AvatarMenu from "./avatar-menu";
import usePath from "../../hooks/use-path";
import { MenuIcon, SearchIcon } from "lucide-react";
import Logo from "components/common/logo";
import MobileSideBar from "components/sidebar/mobile-side-bar";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const { theme } = useThemeStore();
  const { pathNameKor } = usePath();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav
      className={clsx(
        `sticky left-0 top-0 z-30 flex h-[55px] w-full items-center border-b border-MediumGrey px-4 capitalize text-MediumGrey`,
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="flex flex-1 items-center justify-between lg:hidden">
        <button className="text-Main" onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon size={25} />
        </button>
        <Logo />
        <div></div>
      </div>
      <div className="hidden flex-1 text-xl font-semibold lg:block">
        {pathNameKor}
      </div>

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
      {isSidebarOpen ? (
        <MobileSideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
