import clsx from "clsx";
import usePath from "hooks/use-path";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface ISideMenuListProps {}

const SideMenuList: React.FunctionComponent<ISideMenuListProps> = (props) => {
  const nav = useNavigate();
  const { paths, realPath } = usePath();

  return (
    <ul className=" flex-1">
      {paths.map((item) => (
        <li
          key={item.path}
          onClick={() => nav(item.path)}
          className={clsx(
            "flex cursor-pointer items-center gap-x-2 px-5 py-3 text-lg transition-colors hover:bg-Main hover:text-White",
            realPath === `${item.path.replace("/", "")}`
              ? "bg-Main text-White"
              : item.path === "/" && realPath === "Home"
                ? "bg-Main text-White"
                : "",
          )}
        >
          {item.icon}
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default SideMenuList;
