import { calendar_data } from "data/calendar-event";

import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import { componentBackgroundChange } from "utils/util";

import Calendar from "./calendar";
import useCalendar from "hooks/use-calendar";

interface IFootballCalendarProps {
  season: number;
}

const FootballCalendar: React.FunctionComponent<IFootballCalendarProps> = ({
  season,
}) => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { month } = useCalendar(season + "");

  console.log(month);

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
        date={month.monthStart}
        season={month.monthStart}
        events={calendar_data}
      />
    </div>
  );
};
export default FootballCalendar;
