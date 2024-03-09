import clsx from "clsx";

import { useEffect } from "react";

import { useSportsQuery } from "../../hooks/services/quries/use-sports-query";
import { useSaveLeagueQuery } from "hooks/services/quries/use-league-query";

import useThemeStore from "../../stores/theme-store";
import useSportStore from "../../stores/sports-store";
import useModalsStore from "../../stores/modals-store";
import useLeagueStore from "stores/league-store";

import { XIcon } from "lucide-react";
import Logo from "components/common/logo";
import SideMenuList from "./side-menu-list";
import SelectBox from "../navbar/select-box";
import ThemeSwitch from "../navbar/theme-switch";

interface ISidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  isMobile,
  onClose,
}) => {
  const { theme } = useThemeStore();

  const { selectSport, selectedSport } = useSportStore();
  const { data: savedSports, isLoading: isSavedSportsLoading } =
    useSportsQuery();

  const { selectLeague, selectedLeague, clearLeague } = useLeagueStore();
  const { data: saveLeagues, isLoading: isSaveLeaguesLoading } =
    useSaveLeagueQuery(selectedSport?.id!);

  const { openLeagueSettingModal } = useModalsStore();

  useEffect(() => {
    if (savedSports && savedSports?.length > 0) {
      selectSport(savedSports[0]);
    }
  }, [savedSports, selectSport]);

  useEffect(() => {
    if (saveLeagues && saveLeagues?.length > 0) {
      selectLeague(saveLeagues[0].league);
    } else {
      clearLeague();
    }
  }, [selectLeague, saveLeagues, clearLeague]);

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 h-full w-[280px] flex-col border-r border-MediumGrey   
      text-MediumGrey `,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
        isMobile ? "flex flex-col" : "hidden lg:flex lg:flex-col",
      )}
    >
      {/* logo */}
      <div className="flex h-[55px] items-center justify-between px-4">
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
        {/* Sports Selector */}
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Sports
        </p>
        <SelectBox
          type="sports"
          isLoading={isSavedSportsLoading}
          items={savedSports}
          setItem={selectSport}
          icon={selectedSport?.icon}
          name={selectedSport?.name}
        />

        {/* league Selector */}
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Leagues
        </p>
        <SelectBox
          type="league"
          isLoading={isSaveLeaguesLoading}
          items={saveLeagues}
          setItem={selectLeague}
          icon={selectedLeague?.logo}
          name={selectedLeague?.name}
          moreAction={openLeagueSettingModal}
        />
      </div>

      <p className="mx-2 my-2 text-sm uppercase tracking-wider text-Main">
        Menus
      </p>
      <SideMenuList />

      {/* DarkMode change */}
      <p className="mx-2 text-sm uppercase tracking-wider text-Main">Theme</p>
      <ThemeSwitch />
    </aside>
  );
};

export default Sidebar;
