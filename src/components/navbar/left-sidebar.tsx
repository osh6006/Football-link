import clsx from "clsx";
import {
  CalendarCheck,
  LayoutDashboardIcon,
  MedalIcon,
  Newspaper,
} from "lucide-react";
import { useMatches, useNavigate } from "react-router-dom";
import ThemeSwitch from "./theme-switch";

const paths = [
  {
    name: "Home",
    path: "/home",
    icon: <LayoutDashboardIcon />,
  },
  {
    name: "Rank",
    path: "/rank",
    icon: <MedalIcon />,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: <CalendarCheck />,
  },
  {
    name: "News",
    path: "/news",
    icon: <Newspaper />,
  },
];

interface ILeftSidebarProps {}

const LeftSidebar: React.FunctionComponent<ILeftSidebarProps> = () => {
  const nav = useNavigate();
  const { pathname } = useMatches()[1] || [];

  return (
    <aside
      className="hidden h-[100dvh] w-[15dvw] min-w-60 flex-col border-r bg-White  
    xl:flex xl:flex-col"
    >
      <div className="flex h-[55px] items-center px-4">
        <h1 className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main">
          Spolink
        </h1>
      </div>

      {/* Sports Selector */}
      {/* league Selector */}

      <ul className="flex-1 bg-slate-800">
        <p className="mx-2 my-2 text-sm uppercase tracking-wider text-Main">
          Menus
        </p>
        {paths.map((item) => (
          <li
            key={item.path}
            onClick={() => nav(item.path)}
            className={clsx(
              "flex cursor-pointer items-center gap-x-2 px-5 py-3 text-lg transition-colors hover:bg-Main hover:text-White",
              pathname === `${item.path}` ? "bg-Main text-White" : "",
            )}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>

      {/* DarkMode change */}
      <div className="">
        <p className="mx-2 my-2 text-sm uppercase tracking-wider text-Main">
          Theme
        </p>
        <div className="m-4 flex items-center justify-center rounded-md bg-MainHover py-4 ">
          <ThemeSwitch />
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
