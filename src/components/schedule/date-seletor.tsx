import { Fragment, useMemo } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import styles from "./date-calendar.module.css";

import { Menu, Transition } from "@headlessui/react";
import { ClassNames, DateRange, DayPicker } from "react-day-picker";

import { useTheme } from "stores/theme-store";

import { ILeagueSeason } from "types";

interface IDateSelecotrProps {
  currentSeason: ILeagueSeason | null;
  currentRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
}

const DateSelector: React.FunctionComponent<IDateSelecotrProps> = ({
  currentRange,
  currentSeason,
  setDateRange,
}) => {
  const theme = useTheme();

  const classNames = useMemo<ClassNames>(() => {
    return {
      ...styles,
      caption: "custom-caption",
    };
  }, []);

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={clsx(
          "flex h-full items-center justify-center gap-x-2 truncate rounded-xl  px-4 py-2 text-Main shadow-xl transition-colors hover:bg-Main hover:text-White",
          theme === "light" ? "bg-white" : "",
          theme === "dark" ? "bg-DarkGrey" : "",
        )}
      >
        <div className="flex flex-col">
          <span className="text-left text-sm font-bold">From</span>
          <time className="text-left text-base font-normal">
            {`${dayjs(currentRange?.from).format("YYYY-MM-DD")}`}
          </time>
        </div>
        <div className="flex flex-col">
          <span className="text-left text-sm font-bold">To</span>
          <time className="text-left text-base font-normal">
            {`${dayjs(currentRange?.to).format("YYYY-MM-DD")}`}
          </time>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={clsx(
            `absolute left-24 z-50 mt-4 hidden -translate-x-[50%] overflow-hidden rounded-md  px-8 
       text-MediumGrey shadow-lg focus:outline-none sm:block sm:text-sm`,
            theme === "light" ? "bg-white" : "",
            theme === "dark" ? "bg-DarkGrey" : "",
          )}
        >
          <style>{`.custom-caption {color: #635fc7 }
          .custom-today { color: #00ff00ba; font-weight:bold}

          `}</style>
          <DayPicker
            mode="range"
            defaultMonth={currentRange?.to}
            selected={currentRange}
            numberOfMonths={2}
            pagedNavigation
            classNames={classNames}
            weekStartsOn={0}
            fromDate={new Date(currentSeason?.start || "")}
            toDate={new Date(currentSeason?.end || "")}
            onSelect={(data) => {
              setDateRange(data);
            }}
          />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DateSelector;
