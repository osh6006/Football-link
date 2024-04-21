import clsx from "clsx";
import dayjs from "dayjs";

import { Fragment } from "react";
import { ILeagueSeason } from "types";
import { Menu, Transition } from "@headlessui/react";

import { useLeagueStore } from "stores/league-store";
import { getFirstAndLastDayOfMonth } from "utils/util";
import { useTheme } from "stores/theme-store";
import { DateRange } from "react-day-picker";

interface ISeasonSelecorProps {
  currentSeason: ILeagueSeason | null;
  setSeason: (season: ILeagueSeason | null) => void;
  setDateRange: (range: DateRange | undefined) => void;
}

const SeasonSelecor: React.FunctionComponent<ISeasonSelecorProps> = ({
  currentSeason,
  setDateRange,
  setSeason,
}) => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  return (
    <Menu as="div" className="relative ">
      <Menu.Button
        className={clsx(
          "relative flex w-full justify-center gap-x-4 rounded-xl  px-4 py-4 text-Main shadow-xl transition-colors hover:bg-Main hover:text-White",
          theme === "light" ? "bg-white" : "",
          theme === "dark" ? "bg-DarkGrey" : "",
        )}
      >
        <div className=" flex flex-col text-sm font-bold ">
          <div className="text-left">Season</div>
          <time className="text-left text-base font-normal">
            {`${dayjs(currentSeason?.start).format("YYYY")} - ${dayjs(
              currentSeason?.end,
            ).format("YYYY")}`}
          </time>
        </div>

        <div className=" flex flex-col items-start text-sm font-bold ">
          Date Limit
          <time className="text-left text-base font-normal">
            {`${dayjs(currentSeason?.start).format("YYYY-MM-DD")} - ${dayjs(
              currentSeason?.end,
            ).format("YYYY-MM-DD")}`}
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
            `absolute z-50 mt-4 grid w-full  grid-cols-2 items-center justify-center gap-2 overflow-hidden rounded-md p-2 text-DarkGrey  shadow-lg
      focus:outline-none sm:left-32 sm:min-w-[300px] sm:-translate-x-[50%] sm:text-sm`,
            theme === "light" ? "bg-white" : "",
            theme === "dark" ? "bg-DarkGrey" : "",
          )}
        >
          {selectedLeague?.possibleSeasons.map((el) => (
            <Menu.Item key={el.year}>
              <button
                className={clsx(
                  "flex select-none items-center justify-center rounded-md border border-MediumGrey px-3 py-1 text-sm text-MediumGrey transition-colors hover:bg-Main hover:text-white sm:text-lg",
                  el.year === currentSeason?.year ? "bg-Main text-White" : "",
                )}
                onClick={() => {
                  const dateRange = getFirstAndLastDayOfMonth(el.start);
                  setSeason(el);
                  setDateRange({
                    from: new Date(dateRange.firstDay),
                    to: new Date(dateRange.lastDay),
                  });
                }}
              >
                {`${dayjs(el.start).format("YYYY")} - ${dayjs(el.end).format(
                  "YYYY",
                )}`}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SeasonSelecor;
