import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation().pathname.split("/");
  const realPath = location[5];

  return (
    <ul className="mt-8 flex w-full items-center justify-center gap-2">
      {items.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "flex flex-1 cursor-pointer select-none items-center justify-center rounded-md border uppercase transition-colors  hover:bg-Main hover:text-White",
            realPath === item.name
              ? "border-transparent bg-Main text-White"
              : "",
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
