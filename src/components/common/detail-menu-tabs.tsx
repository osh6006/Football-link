import clsx from "clsx";
import { Link, useMatches } from "react-router-dom";

interface Iitems {
  path: string;
  name: string;
}

interface IDetailMenuTabsProps {
  items: Iitems[];
}

const DetailMenuTabs: React.FunctionComponent<IDetailMenuTabsProps> = ({
  items,
}) => {
  const { pathname } = useMatches()[2];
  const realPath = pathname.split("/").at(-1);

  return (
    <ul className="mt-8 flex w-full items-center justify-center gap-2">
      {items.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "flex flex-1 cursor-pointer select-none items-center justify-center rounded-md border uppercase transition-colors  hover:bg-Main hover:text-White",
            realPath === item.name ? "bg-Main text-White" : "",
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

export default DetailMenuTabs;
