import clsx from "clsx";
import { isIncludeInSelectedItem } from "../../utils/util";

interface IMultiSelectProps {
  items: any[];
  isImg?: boolean;
  handleSelect: (item: any) => void;
  selectedItems: any[];
}

const MultiSelect: React.FunctionComponent<IMultiSelectProps> = ({
  items,
  handleSelect,
  selectedItems,
  isImg,
}) => {
  return (
    <ul className="z-10 grid w-full grid-cols-2 items-center justify-between gap-4 ">
      {items.map((item) => (
        <li
          key={item.id}
          className={clsx(
            `flex cursor-pointer select-none flex-nowrap items-center gap-x-2 rounded-md border px-4 py-2 
            text-sm transition-colors sm:text-base sm:hover:bg-Main sm:hover:text-white
            `,
            isIncludeInSelectedItem(selectedItems, item.id)
              ? "bg-Main text-white"
              : "",
          )}
          onClick={() => handleSelect(item)}
        >
          {isImg ? (
            <img src={item.logo} alt="logo" className="aspect-auto h-5 w-5" />
          ) : (
            <p>{item.icon}</p>
          )}
          <p className="flex-1 capitalize">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MultiSelect;
