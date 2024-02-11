import dayjs from "dayjs";
import { useState } from "react";
import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import useScheduleStore from "stores/schedule-store";
import { componentBackgroundChange } from "utils/util";
import { useScheduleQuery } from "hooks/services/quries/use-football-query";

import DaySelector from "./day-selector";
import YearSelector from "./year-selector";
import Loading from "components/common/loading";
import ComponentStatusContainer from "containers/component-status-container";

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
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <p>데이터를 불러오던 도중 오류가 발생하였습니다.</p>
      </ComponentStatusContainer>
    );
  }

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "max-w-[1280px] rounded-md p-8",
      )}
    >
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
      <ul className="mt-6 w-full space-y-4 px-8">
        {data?.map((el) => (
          <li className="flex w-full items-center justify-between rounded-md  border border-MediumGrey px-4 py-2">
            <div className="flex gap-x-4 ">
              <time className="text-sm font-semibold">
                {isAll
                  ? dayjs(el.fixture.date).format("MM-DD HH:MM")
                  : dayjs(el.fixture.date).format("HH:MM")}
              </time>
              <span className="text-sm">{el.fixture.venue.name}</span>
            </div>

            <div className="flex items-center gap-x-4">
              <div>
                <span className="flex items-center justify-center rounded-sm bg-green-500 px-[3px] text-xs leading-[20px] text-white">
                  홈
                </span>
              </div>
              <div>{el.teams.home.name}</div>
              <img
                src={el.teams.home.logo}
                alt="homeLogo"
                className="max-w-8"
              />
            </div>

            <div className="flex gap-x-3 font-semibold">
              <div>{el.goals.home}</div>
              <span className="rounded-md bg-blue-500 px-2 py-1 text-xs leading-[20px] text-White">
                {el.fixture.status.long}
              </span>
              <div>{el.goals.away}</div>
            </div>

            <div className="flex items-center gap-x-4">
              <img
                src={el.teams.away.logo}
                alt="homeLogo"
                className="max-w-8"
              />
              <div>{el.teams.away.name}</div>
            </div>

            <span className="text-sm font-semibold">{`${el.league.round.at(
              -2,
            )}${el.league.round.at(-1)}R`}</span>

            <button
              onClick={() => {
                // TODO: 페이지 이동
              }}
              className="rounded-md border border-MediumGrey px-2 py-[2px] text-sm transition-colors  hover:bg-Main hover:text-White"
            >
              기록
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FootballCalendar;
