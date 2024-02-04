import clsx from "clsx";
import Button from "./button";

interface IFilterProps {
  items: {
    imageURL?: string;
    icon?: string;
    value: string;
  }[];
  selectFilter: string;
  setFilter: (filter: string) => void;
}

const Filter: React.FunctionComponent<IFilterProps> = ({
  items,
  selectFilter,
  setFilter,
}) => {
  console.log(selectFilter);

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
              item.value === selectFilter
                ? "border border-Main font-semibold text-Main"
                : "border border-MediumGrey",
            )}
            onClick={() => setFilter(item.value)}
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
