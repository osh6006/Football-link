import {
  CalendarCheck,
  Eye,
  LayoutDashboardIcon,
  MedalIcon,
  Newspaper,
  RadioTower,
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
      isNew: false,
      isPrivate: false,
    },
    {
      name: "Predict",
      path: "/predict",
      icon: <Eye />,
      isNew: true,
      isPrivate: true,
    },
    {
      name: "Live",
      path: "/live",
      icon: <RadioTower />,
      isNew: false,
      isPrivate: false,
    },
    {
      name: "Rank",
      path: "/rank",
      icon: <MedalIcon />,
      isNew: false,
      isPrivate: false,
    },

    {
      name: "Schedule",
      path: "/schedule",
      icon: <CalendarCheck />,
      isNew: false,
      isPrivate: false,
    },
    {
      name: "News",
      path: "/news",
      icon: <Newspaper />,
      isNew: false,
      isPrivate: false,
    },
  ];

  return { paths, realPath, pathname };
}
