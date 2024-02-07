import { calendar_data } from "data/calendar-event";

import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import { componentBackgroundChange } from "utils/util";

import Calendar from "./calendar";
import useScheduleStore from "stores/schedule-store";

interface IFootballCalendarProps {}

const FootballCalendar: React.FunctionComponent<
  IFootballCalendarProps
> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { currentDate, controlDate, initDate } = useScheduleStore();

  //   const {} = useScheduleQuery({
  //     season,
  //     leagueId: selectedLeague?.rapid_football_league_id!,
  //     start: "",
  //     end: "",
  //   });

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "h-full w-full max-w-[1280px] rounded-md p-8",
      )}
    >
      <Calendar
        events={calendar_data}
        date={currentDate}
        controlDate={controlDate}
        initDate={initDate}
      />
    </div>
  );
};
export default FootballCalendar;
