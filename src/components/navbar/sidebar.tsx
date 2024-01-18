import clsx from "clsx";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import usePath from "../../hooks/use-path";
import { useSportsQuery } from "../../hooks/use-sports";
import useThemeStore from "../../stores/theme-store";
import useSportStore from "../../stores/sports-store";
import useModalsStore from "../../stores/modals-store";

import SelectBox from "./select-box";
import ThemeSwitch from "./theme-switch";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const nav = useNavigate();
  const { paths, realPath } = usePath();
  const { theme } = useThemeStore();
  const { data, isLoading } = useSportsQuery();
  const { selectSport, selectedSport } = useSportStore();
  const { openSportsSettingModal } = useModalsStore();

  useEffect(() => {
    if (data && data?.length > 0) {
      selectSport(data[0]);
    }
  }, [data, selectSport]);

  return (
    <aside
      className={clsx(
        `hidden h-[100dvh] w-[15dvw] min-w-60 flex-col border-r border-MediumGrey   
      text-MediumGrey xl:flex xl:flex-col`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
      {/* logo */}
      <div className="flex h-[55px] items-center px-4">
        <h1 className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main">
          Spolink
        </h1>
      </div>

      <div className="px-2">
        {/* Sports Selector */}
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Sports
        </p>
        <SelectBox
          isLoading={isLoading}
          items={data}
          setItem={selectSport}
          icon={selectedSport?.icon}
          name={selectedSport?.name}
          moreAction={openSportsSettingModal}
        />

        {/* league Selector */}
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Leagues
        </p>
        <SelectBox
          isLoading={isLoading}
          items={data}
          setItem={selectSport}
          icon={selectedSport?.icon}
          name={selectedSport?.name}
        />
      </div>

      <ul className=" flex-1">
        <p className="mx-2 my-2 text-sm uppercase tracking-wider text-Main">
          Menus
        </p>
        {paths.map((item) => (
          <li
            key={item.path}
            onClick={() => nav(item.path)}
            className={clsx(
              "flex cursor-pointer items-center gap-x-2 px-5 py-3 text-lg transition-colors hover:bg-Main hover:text-White",
              realPath === `${item.path}` ? "bg-Main text-White" : "",
            )}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>

      {/* DarkMode change */}
      <div className="">
        <p className="mx-2 text-sm uppercase tracking-wider text-Main">Theme</p>
        <div
          className={clsx(
            `mx-4 mb-4 mt-2 flex items-center justify-center rounded-md py-4`,
            theme === "light" ? "bg-LinesLight" : "bg-VeryDarkGreyDark",
          )}
        >
          <ThemeSwitch />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
