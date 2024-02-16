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
      name: "홈",
      path: "/",
      activeName: "Home",
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

  // const pathNameKor = getPathNameInPaths(paths, realPath);

  return { paths, realPath, pathname };
}

function getPathNameInPaths(paths: any[], path: string) {
  return paths.find((el) => el.path === path).name;
}
