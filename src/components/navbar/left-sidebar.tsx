import clsx from "clsx";
import {
  CalendarCheck,
  LayoutDashboardIcon,
  MedalIcon,
  Newspaper,
} from "lucide-react";
import { useMatches, useNavigate } from "react-router-dom";

const paths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    name: "Rank",
    path: "/rank",
    icon: <MedalIcon />,
  },
  {
    name: "Schedule",
    path: "/dashboard",
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
    <aside className="hidden h-[100dvh] w-[15dvw] min-w-60 border-r bg-White py-2 xl:block">
      <div className="px-3">
        <h1 className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main">
          Spolink
        </h1>
      </div>
      <ul className="mt-10">
        {paths.map((item) => (
          <li
            onClick={() => nav("/dashboard")}
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
    </aside>
  );
};

export default LeftSidebar;
