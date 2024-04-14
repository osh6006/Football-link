import clsx from "clsx";
import dayjs from "dayjs";

import SeasonSelecor from "./season-selector";
import DateSelector from "./date-seletor";

import { useTheme } from "stores/theme-store";
import { useLeagueStore } from "stores/league-store";

import useScheduleStore from "stores/schedule-store";

interface IScheduleSelectorProps {}

const ScheduleSelector: React.FunctionComponent<
  IScheduleSelectorProps
> = () => {
  const theme = useTheme();

  const leagueStore = useLeagueStore((state) => state.selectedLeague);
  const setSeason = useScheduleStore((state) => state.setSeason);
  const currentRange = useScheduleStore((state) => state.currentRange);
  const setDateRange = useScheduleStore((state) => state.setDateRange);

  const handleToday = () => {
    const today = dayjs().format("YYYY-MM-DD");
    setSeason(leagueStore?.possibleSeasons.at(-1) || null);
    setDateRange({
      from: new Date(today),
      to: new Date(today),
    });
  };

  return (
    <div
      className={clsx(
        "sticky top-[55px] z-50  mx-auto flex w-[95%] justify-center gap-x-4 rounded-md bg-LightGreyLightBg p-5",
        theme === "light" ? "bg-LightGreyLightBg" : "",
        theme === "dark" ? "bg-VeryDarkGreyDark" : "",
      )}
    >
      <SeasonSelecor />
      <DateSelector />
      <button
        onClick={handleToday}
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
