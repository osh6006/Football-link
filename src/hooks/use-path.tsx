import {
  CalendarCheck,
  LayoutDashboardIcon,
  MedalIcon,
  Newspaper,
} from "lucide-react";
import { useMatches } from "react-router-dom";

export default function usePath() {
  const { pathname } = useMatches()[1] || "";
  const realPath = pathname ? pathname : "/";

  const paths = [
    {
      name: "홈 피드",
      path: "/",
      icon: <LayoutDashboardIcon />,
    },
    {
      name: "순위",
      path: "/rank",
      icon: <MedalIcon />,
    },
    {
      name: "일정",
      path: "/schedule",
      icon: <CalendarCheck />,
    },
    {
      name: "소식",
      path: "/news",
      icon: <Newspaper />,
    },
  ];
  return { paths, realPath };
}
