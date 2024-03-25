import clsx from "clsx";

import { Fragment } from "react";
import { ChevronsUpDownIcon } from "lucide-react";
import { Combobox, Transition } from "@headlessui/react";

import { useTheme } from "stores/theme-store";

interface IComboBoxProps<T> {
  items: T[];
  selectedItem: T;
  label: string;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: T[];
  onChange: (value: string) => void;
  renderInput: (item: T) => JSX.Element;
  renderOption: (item: T, index: number) => JSX.Element;
}

const ComboBox = <T,>({
  items,
  selectedItem,
  label,
  isFocused,
  filteredItems,
  query,
  setQuery,
  renderInput,
  renderOption,
  onChange,
}: IComboBoxProps<T>) => {
  const theme = useTheme();

  return (
    <Combobox
      value={selectedItem}
      onChange={(e) => {
        onChange(e as string);
      }}
    >
      <Combobox.Label
        className={
          "mt-10 text-sm font-semibold uppercase tracking-wider text-Main"
        }
      >
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <div
          className={clsx(
            "relative w-full cursor-default overflow-hidden rounded-lg border border-MediumGrey text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",
            isFocused ? "ring-2 ring-Main" : "",
          )}
        >
          {renderInput(selectedItem)}
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options
            className={clsx(
              "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
              theme === "dark" ? "bg-VeryDarkGreyDark " : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
          >
            {filteredItems?.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none px-4 py-2 text-MediumGrey">
                Nothing found Item.
              </div>
            ) : (
              filteredItems.map((item, index) => renderOption(item, index))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default ComboBox;
