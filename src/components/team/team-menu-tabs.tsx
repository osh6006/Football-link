import clsx from "clsx";
import { Link, useMatches } from "react-router-dom";

interface Iitems {
  path: string;
  name: string;
}

interface ITeamMenuTabsProps {
  items: Iitems[];
}

const TeamMenuTabs: React.FunctionComponent<ITeamMenuTabsProps> = ({
  items,
}) => {
  const { pathname } = useMatches()[2];

  const realPath = pathname.split("/").at(-1);

  console.log(realPath);

  return (
    <ul className="mt-8 grid w-full grid-cols-4 items-center justify-center">
      {items.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "flex cursor-pointer select-none items-center justify-center rounded-md uppercase transition-colors hover:bg-MainHover",
            realPath === item.name ? "bg-MainHover" : "",
          )}
        >
          <Link
            to={`.${item.path}`}
            relative="path"
            className="h-full w-full py-4 text-center"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TeamMenuTabs;
