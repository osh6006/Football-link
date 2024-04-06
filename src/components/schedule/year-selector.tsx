import clsx from "clsx";
import dayjs from "dayjs";
import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { useLeagueStore } from "stores/league-store";
import useScheduleStore from "stores/schedule-store";

interface IYearSelectorProps {
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const YearSelector: React.FunctionComponent<IYearSelectorProps> = ({
  setIsAll,
}) => {
  const { currentDate, controlDate } = useScheduleStore();
  const isToday =
    currentDate === dayjs(new Date()).locale("ko").format("YYYY-MM-DD");

  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const lastYear = selectedLeague?.possibleSeasons.at(-1)?.year;
  const firstYear = selectedLeague?.possibleSeasons.at(1)?.year;
  const years = Array.from(
    { length: lastYear! - firstYear! + 1 },
    (_, index) => firstYear! + index,
  );

  return (
    <div
      className={clsx(
        "sticky top-[55px] z-40 mb-5 flex items-center justify-center bg-inherit p-1.5 sm:p-4",
      )}
    >
      <button
        className={clsx(
          "mr-2 whitespace-nowrap rounded-xl border border-MediumGrey px-2 text-xs leading-10 sm:mr-4 sm:text-sm",
          isToday ? "bg-Main text-white" : "",
        )}
        onClick={() => {
          controlDate("TODAY", "asdf");
          setIsAll(false);
        }}
      >
        Today
      </button>
      <div className="flex items-center gap-x-4">
        <button
          className="mt-1 hover:text-Main"
          onClick={() => {
            if (currentDate) controlDate("PREV", "month");
          }}
        >
          <ChevronLeftIcon size={25} />
        </button>
        <h2 className="whitespace-nowrap text-center text-2xl font-semibold text-Main sm:text-3xl">
          {currentDate}
        </h2>
        <button
          className="mt-1 hover:text-Main"
          onClick={() => controlDate("NEXT", "month")}
        >
          <ChevronRightIcon size={25} />
        </button>
      </div>
      <Menu as="div" className="relative">
        <Menu.Button className="relative ml-2 mt-2 hover:text-Main ">
          <CalendarIcon />
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
              `absolute -left-[120px] mt-4 grid w-[300px] -translate-x-[50%] grid-cols-3 items-center justify-center gap-2 overflow-hidden rounded-md bg-white p-2
            text-DarkGrey shadow-lg focus:outline-none sm:left-0 sm:text-sm md:w-[380px]`,
            )}
          >
            {years.map((el) => (
              <Menu.Item key={el}>
                <button
                  className={clsx(
                    "flex select-none items-center justify-center rounded-md border border-MediumGrey px-3 py-1 text-lg text-MediumGrey transition-colors hover:bg-Main hover:text-white",
                    el === dayjs(currentDate).year()
                      ? "bg-Main text-White"
                      : "",
                  )}
                  onClick={() => {
                    controlDate(
                      "CUSTOM",
                      `${el}-${dayjs(currentDate).month() + 1}-${dayjs(
                        currentDate,
                      ).date()}`,
                    );
                  }}
                >
                  {el}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default YearSelector;
