import clsx from "clsx";
import Button from "./button";
import { useSearchParams } from "react-router-dom";

interface IFilterProps {
  items: {
    imageURL?: string;
    icon?: string;
    value: string;
  }[];
}

const Filter: React.FunctionComponent<IFilterProps> = ({ items }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabsName = searchParams.get("tabs") || "";
  const filterName = searchParams.get("filterName");

  return (
    <ul className="flex flex-wrap items-center gap-2 ">
      {items.map((item) => (
        <li
          key={item.value}
          className={clsx("flex items-center gap-x-1")}
          role="button"
        >
          <Button
            size="sm"
            className={clsx(
              " border-2 uppercase tracking-widest hover:border-Main hover:text-Main",
              item.value === filterName
                ? "border border-Main font-semibold text-Main"
                : "border border-MediumGrey",
            )}
            onClick={() =>
              setSearchParams(`?${tabsName}&filterName=${item.value}`)
            }
          >
            {item.imageURL && (
              <img
                src={item.imageURL}
                alt="flag"
                className="aspect-square h-6 w-6"
              />
            )}
            {item.value || "ALL"}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
