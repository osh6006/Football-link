import clsx from "clsx";

import { XIcon } from "lucide-react";
import Logo from "components/common/logo";
import SideMenuList from "./side-menu-list";
import ThemeSwitch from "../navbar/theme-switch";

import { useTheme } from "stores/theme-store";

import SelectCountry from "./select-country";
import SelectLeague from "./select-league";

interface ISidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  isMobile,
  onClose,
}) => {
  const theme = useTheme();

  // leagues
  // fetch Country code Arr if not select country Epl First

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 z-[100] h-full w-[280px] flex-col border-r border-MediumGrey   
      text-MediumGrey `,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
        isMobile ? "flex flex-col" : "hidden lg:flex lg:flex-col",
      )}
    >
      {/* logo */}
      <div className=" flex h-[55px] items-center justify-between px-4">
        <Logo path="/" />
        <button
          className={clsx("hover:text-Main", isMobile ? "block" : "hidden")}
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) {
              onClose();
            }
          }}
        >
          <XIcon />
        </button>
      </div>

      <div className="px-2">
        <SelectCountry />
        <SelectLeague />
      </div>

      <SideMenuList label="Menus" />

      {/* DarkMode change */}
      <p className="mx-2 text-sm uppercase tracking-wider text-Main">Theme</p>
      <ThemeSwitch />
    </aside>
  );
};

export default Sidebar;
