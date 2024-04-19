import clsx from "clsx";
import { useState } from "react";

import Button from "../common/button";
import AvatarMenu from "./avatar-menu";
import Logo from "components/common/logo";
import { MenuIcon, SearchIcon } from "lucide-react";
import MobileSideBar from "components/sidebar/mobile-side-bar";

import useAuth from "../../hooks/use-auth";
import usePath from "../../hooks/use-path";
import { useTheme } from "stores/theme-store";
import { useNavigate } from "react-router-dom";
import SearchBar from "./search-bar";
import { useSearch } from "stores/search-store";

const Navbar = () => {
  const theme = useTheme();
  const nav = useNavigate();
  const { user } = useAuth();
  const { realPath } = usePath();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSearchBarOpen = useSearch((state) => state.isOpen);
  const setIsSearchbarOpen = useSearch((state) => state.setIsOpen);

  const toggleSearchBar = () => {
    setIsSearchbarOpen(!isSearchBarOpen);
  };

  return (
    <nav
      className={clsx(
        `sticky left-0 top-0 z-50 flex h-[55px] w-full items-center border-none border-MediumGrey px-4 capitalize text-MediumGrey shadow-md sm:border-b sm:shadow-none`,
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="flex flex-1 items-center justify-between lg:hidden">
        <button
          className="text-Main"
          aria-label="Menu-Button"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon size={25} />
        </button>
        <Logo path="/" />
        <div></div>
      </div>
      <div className="hidden flex-1 text-xl font-semibold lg:block">
        {realPath.split("/")[0]}
      </div>

      <div className="flex items-center gap-x-2">
        {user ? (
          <div className="flex items-center gap-x-2">
            <button
              onClick={toggleSearchBar}
              className="transition-colors hover:text-Main"
            >
              <SearchIcon className="mb-1" size={25} />
            </button>
            <AvatarMenu user={user!} size="md" />
          </div>
        ) : (
          <Button color="main" onClick={() => nav("/auth")} size="sm">
            Sign In
          </Button>
        )}
      </div>
      {isSidebarOpen ? (
        <MobileSideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : null}
      {isSearchBarOpen ? <SearchBar /> : null}
    </nav>
  );
};

export default Navbar;
