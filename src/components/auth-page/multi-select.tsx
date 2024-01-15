import { SportItems } from "../../data/sports";
import clsx from "clsx";
import { isIncludeInSelectedItem } from "../../utils/util";

interface IMultiSelectProps {
  items: any[];
  handleSelect: (sport: any) => void;
}

const MultiSelect: React.FunctionComponent<IMultiSelectProps> = ({
  items,
  handleSelect,
}) => {
  return (
    <ul className="z-10 grid w-full grid-cols-2 items-center justify-between gap-4 sm:grid-cols-3 ">
      {SportItems.map((sport) => (
        <li
          key={sport.value}
          className={clsx(
            `flex cursor-pointer select-none flex-nowrap items-center gap-x-2 rounded-md border px-4 py-2 
            text-sm transition-colors sm:text-base sm:hover:bg-Main sm:hover:text-white
            `,
            isIncludeInSelectedItem(items, sport.value)
              ? "bg-Main text-white"
              : "",
          )}
          onClick={() => handleSelect(sport)}
        >
          <p>{sport.icon}</p>
          <p className="flex-1">{sport.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MultiSelect;
