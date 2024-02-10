import { calendar_data } from "data/calendar-event";

import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import { componentBackgroundChange } from "utils/util";

import Calendar from "./calendar";
import useScheduleStore from "stores/schedule-store";
import { useScheduleQuery } from "hooks/services/quries/use-football-query";
import dayjs from "dayjs";
import DaySelector from "./day-selector";
import YearSelector from "./year-selector";

interface IFootballCalendarProps {}

const FootballCalendar: React.FunctionComponent<
  IFootballCalendarProps
> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { currentDate, controlDate, initDate } = useScheduleStore();

  const formatDate = dayjs(currentDate);
  const season = formatDate.year() - 1;
  const firstDayOfMonth = formatDate.startOf("month").format("YYYY-MM-DD");
  const lastDayOfMonth = formatDate.endOf("month").format("YYYY-MM-DD");

  // const { data, isLoading, isError } = useScheduleQuery({
  //   season,
  //   leagueId: selectedLeague?.rapid_football_league_id!,
  //   start: firstDayOfMonth,
  //   end: lastDayOfMonth,
  // });

  // console.log(data);

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "h-full w-full max-w-[1280px] rounded-md p-8",
      )}
    >
      <YearSelector />
      <DaySelector />
    </div>
  );
};
export default FootballCalendar;
