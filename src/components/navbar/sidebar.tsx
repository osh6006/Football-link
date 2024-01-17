import clsx from "clsx";

import { useNavigate } from "react-router-dom";
import ThemeSwitch from "./theme-switch";
import useThemeStore from "../../stores/theme-store";
import usePath from "../../hooks/use-path";
import SelectBox from "./select-box";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const nav = useNavigate();
  const { paths, realPath } = usePath();
  const { theme } = useThemeStore();

  return (
    <aside
      className={clsx(
        `hidden h-[100dvh] w-[15dvw] min-w-60 flex-col border-r border-MediumGrey   
      text-MediumGrey xl:flex xl:flex-col`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
      <div className="flex h-[55px] items-center px-4">
        <h1 className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main">
          Spolink
        </h1>
      </div>

      {/* Sports Selector */}
      <div className="Sports px-2">
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Sports
        </p>
        <SelectBox label="Selected Sports" />
      </div>
      {/* league Selector */}
      <div className="Leagues px-2">
        <p className="my-2 text-sm uppercase tracking-wider text-Main">
          Leagues
        </p>
        <SelectBox label="Selected Sports" />
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
