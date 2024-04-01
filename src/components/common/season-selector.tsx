import clsx from "clsx";

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { useLeagueStore } from "stores/league-store";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ISeasonSelectorProps {
  season: number;
  handleSetSeason: (season: number) => void;
  handleSeasonIncrese: () => void;
  handleSeasonDecrese: () => void;
}

const SeasonSelector: React.FunctionComponent<ISeasonSelectorProps> = ({
  season,
  handleSetSeason,
  handleSeasonIncrese,
  handleSeasonDecrese,
}) => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const thisYear = selectedLeague?.possibleSeasons.at(-1)?.year;
  const firstYear = selectedLeague?.possibleSeasons.at(1)?.year;

  const selecte_years = Array.from(
    { length: thisYear! - firstYear! + 1 },
    (_, index) => firstYear! + index,
  );

  return (
    <div className="flex items-center gap-2 py-1">
      <button
        className={clsx(
          "mt-1",
          season === firstYear ? "cursor-not-allowed" : "font-bold text-Main",
        )}
        onClick={() => handleSeasonDecrese()}
      >
        <ChevronLeftIcon size={30} />
      </button>

      <Menu as="div">
        <Menu.Button
          className="lea relative flex select-none items-center gap-x-2 rounded-md border border-MediumGrey px-4 py-1 text-[24px]
        leading-normal transition-colors hover:border-Main hover:bg-Main hover:text-white"
        >
          <CalendarIcon size={26} />
          <span>{season}</span>
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
              `absolute left-[50%] z-10 mt-4 grid w-[300px] -translate-x-[50%] grid-cols-3  items-center justify-center gap-2 overflow-hidden rounded-md bg-white
            p-2 text-DarkGrey shadow-lg focus:outline-none sm:text-sm md:w-[380px]`,
            )}
          >
            {selecte_years.map((el) => (
              <Menu.Item key={el}>
                <button
                  className="flex select-none items-center justify-center rounded-md border border-MediumGrey px-3 py-1 text-lg text-MediumGrey transition-colors hover:bg-Main hover:text-white"
                  onClick={() => {
                    handleSetSeason(el);
                  }}
                >
                  {el}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      <button
        className={clsx(
          "mt-1",
          season === thisYear ? "cursor-not-allowed" : "font-bold text-Main",
        )}
        onClick={() => handleSeasonIncrese()}
      >
        <ChevronRightIcon size={30} />
      </button>
    </div>
  );
};

export default SeasonSelector;
