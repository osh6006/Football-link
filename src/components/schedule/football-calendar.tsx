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
import ComponentStatusContainer from "containers/component-status-container";
import Loading from "components/common/loading";
import { useState } from "react";

interface IFootballCalendarProps {}

const FootballCalendar: React.FunctionComponent<
  IFootballCalendarProps
> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { currentDate } = useScheduleStore();

  const formatDate = dayjs(currentDate);
  const season = formatDate.year() - 1;
  const firstDayOfMonth = formatDate.startOf("month").format("YYYY-MM-DD");
  const lastDayOfMonth = formatDate.endOf("month").format("YYYY-MM-DD");

  const [isAll, setIsAll] = useState(true);

  const { data, isLoading, isError } = useScheduleQuery({
    isAll,
    season,
    date: currentDate,
    end: lastDayOfMonth,
    start: firstDayOfMonth,
    leagueId: selectedLeague?.rapid_football_league_id!,
  });

  console.log(data);

  if (isLoading) {
    <ComponentStatusContainer state="loading" height="500">
      <Loading size="md" />
    </ComponentStatusContainer>;
  }

  if (isError) {
    <ComponentStatusContainer state="loading" height="500">
      <p>데이터를 불러오던 도중 오류가 발생하였습니다.</p>
    </ComponentStatusContainer>;
  }

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "h-full w-full max-w-[1280px] rounded-md p-8",
      )}
    >
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
    </div>
  );
};
export default FootballCalendar;
