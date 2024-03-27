import clsx from "clsx";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronsUpDownIcon } from "lucide-react";
import { useTheme } from "stores/theme-store";

interface IListBoxProps<T> {
  items: T[];
  selectedItem: T;
  setSelectedItem: (value: string) => void;
  renderSelectedItem: (item: T) => JSX.Element;
  renderOption: (item: T, index: number) => JSX.Element;
  className?: string;
}

const ListBox = <T,>({
  items,
  selectedItem,
  setSelectedItem,
  renderSelectedItem,
  renderOption,
  className,
}: IListBoxProps<T>) => {
  const theme = useTheme();

  return (
    <Listbox
      onChange={(value) => {
        setSelectedItem(value);
      }}
    >
      <div className="relative mt-1">
        <Listbox.Button
          className={clsx(
            "relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
            className,
            theme === "dark" ? "bg-VeryDarkGreyDark " : "",
            theme === "light" ? "bg-LightGreyLightBg" : "",
          )}
        >
          {renderSelectedItem(selectedItem)}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={clsx(
              "absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1  text-base  shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
              theme === "dark" ? "bg-VeryDarkGreyDark " : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
          >
            {items.map((el, index) => renderOption(el, index))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBox;
