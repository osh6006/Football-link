import clsx from "clsx";
import dayjs from "dayjs";
import { Fragment } from "react";
import { ClassNames, DayPicker } from "react-day-picker";

import { Menu, Transition } from "@headlessui/react";

import styles from "react-day-picker/dist/style.module.css";
import useScheduleStore from "stores/schedule-store";

interface IDateSelecotrProps {}

const DateSelector: React.FunctionComponent<IDateSelecotrProps> = (props) => {
  const currentSeason = useScheduleStore((state) => state.currentSeason);
  const currentRange = useScheduleStore((state) => state.currentRange);
  const setDateRange = useScheduleStore((state) => state.setDateRange);

  const classNames: ClassNames = {
    ...styles,
    caption: "custom-caption",
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex h-full items-center justify-center gap-x-2 truncate rounded-xl bg-White px-4 py-2 text-Main shadow-xl transition-colors hover:bg-Main hover:text-White">
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
            `absolute left-24 z-50 mt-4 hidden -translate-x-[50%] overflow-hidden rounded-md bg-white px-8 
      text-DarkGrey shadow-lg focus:outline-none sm:block sm:text-sm `,
          )}
        >
          <style>{`.custom-caption {color: #635fc7 }
          .custom-today { color: #00ff00ba; font-weight:bold}
          `}</style>
          <DayPicker
            mode="range"
            defaultMonth={new Date(currentSeason?.start || "")}
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
