import clsx from "clsx";
import dayjs from "dayjs";
import { DateRange } from "react-day-picker";

import SeasonSelecor from "./season-selector";
import DateSelector from "./date-seletor";

import { useTheme } from "stores/theme-store";
import { ILeagueSeason } from "types";

interface IScheduleSelectorProps {
  currentRange: DateRange | undefined;
  currentSeason: ILeagueSeason | null;

  hadleToday: () => void;
  setSeason: (season: ILeagueSeason | null) => void;
  setDateRange: (range: DateRange | undefined) => void;
}

const ScheduleSelector: React.FunctionComponent<IScheduleSelectorProps> = ({
  currentRange,
  currentSeason,
  hadleToday,
  setSeason,
  setDateRange,
}) => {
  const theme = useTheme();

  return (
    <div
      className={clsx(
        "sticky top-[55px] z-50  mx-auto flex w-[95%] justify-center gap-x-4 rounded-md bg-LightGreyLightBg p-5",
        theme === "light" ? "bg-LightGreyLightBg" : "",
        theme === "dark" ? "bg-VeryDarkGreyDark" : "",
      )}
    >
      <SeasonSelecor
        currentSeason={currentSeason}
        setDateRange={setDateRange}
        setSeason={setSeason}
      />
      <DateSelector
        currentRange={currentRange}
        currentSeason={currentSeason}
        setDateRange={setDateRange}
      />
      <button
        onClick={hadleToday}
        className={clsx(
          "flex items-center justify-center rounded-xl  px-4 py-2 text-sm font-bold  shadow-xl transition-colors hover:bg-Main hover:text-White",
          dayjs(currentRange?.from).format("YYYY-MM-DD") ===
            dayjs(new Date()).format("YYYY-MM-DD")
            ? "bg-Main text-White"
            : theme === "light"
              ? "bg-White text-Main"
              : theme === "dark"
                ? "bg-DarkGrey text-Main"
                : "",
        )}
      >
        Today
      </button>
    </div>
  );
};

export default ScheduleSelector;
