import clsx from "clsx";
import { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { useTheme } from "stores/theme-store";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ISelectBoxProps<T> {
  items: T[];
  label?: string;
  filteredItems?: T[];
  selectedItem?: T;
  setSelectedItem?: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  displayKey: string;
  inputRender?: (item: T, index: number) => JSX.Element;
}

const SelectBox = <T,>({
  label,
  items,
  selectedItem,
  setSelectedItem,
  filteredItems,
  query,
  setQuery,
  isFocused,
  setIsFocused,
  displayKey,
}: ISelectBoxProps<T>) => {
  const theme = useTheme();

  return (
    <Combobox value={selectedItem} onChange={(e) => {}}>
      <Combobox.Label
        className={"mt-10 text-sm uppercase tracking-wider text-Main"}
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
          <Combobox.Input
            className={clsx(
              "w-full py-3 pl-3 pr-10 text-sm font-semibold leading-5 text-MediumGrey focus:outline-none",
              theme === "dark" ? "bg-VeryDarkGreyDark" : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
            placeholder={`Search ${label}`}
            displayValue={(item: T) => ""}
            onChange={(event) => {
              return setQuery(event.target.value);
            }}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
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
              filteredItems?.map((item: any) => (
                <Combobox.Option
                  key={item.alpha2}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-Main text-white" : "text-MediumGrey"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`flex items-center gap-x-3 truncate text-sm ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <LazyLoadImage
                          src={item.flag}
                          className="h-5 w-5 "
                          alt={item[displayKey]}
                        />
                        {item[displayKey]}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-Main"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default SelectBox;
