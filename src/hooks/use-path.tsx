import {
  CalendarCheck,
  LayoutDashboardIcon,
  MedalIcon,
  Newspaper,
} from "lucide-react";
import { useMatches } from "react-router-dom";

export default function usePath() {
  const { pathname } = useMatches()[1] || "";

  const realPath = pathname === "/" ? "Home" : pathname.replace("/", "");

  const paths = [
    {
      name: "Home",
      path: "/",
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

  return { paths, realPath, pathname };
}
