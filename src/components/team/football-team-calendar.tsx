import dayjs from "dayjs";

import ScheduleCard from "components/schedule/schedule.card";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useEffect } from "react";
import { useMatches } from "react-router-dom";
import useScheduleStore from "stores/schedule-store";
import { useScheduleQuery } from "hooks/services/quries/use-schedule-query";

interface IFootballTeamCalendarProps {
  isAll: boolean;
}

const FootballTeamCalendar: React.FunctionComponent<
  IFootballTeamCalendarProps
> = ({ isAll }) => {
  const teamId = useMatches()[0].params.teamId;

  const { initDate, currentDate } = useScheduleStore();

  useEffect(() => {
    initDate();
  }, [initDate]);

  const formatDate = dayjs(currentDate);
  const season = formatDate.year() - 1;
  const firstDayOfMonth = formatDate.startOf("month").format("YYYY-MM-DD");
  const lastDayOfMonth = formatDate.endOf("month").format("YYYY-MM-DD");

  const { data, isLoading, isError } = useScheduleQuery({
    isAll,
    season,
    date: currentDate,
    end: lastDayOfMonth,
    start: firstDayOfMonth,
    teamId: teamId,
  });

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
        <p>An error occurred while trying to fetch data 🤮</p>
      </ComponentStatusContainer>
    );
  }

  return (
    <ul className=" mt-6 w-full space-y-4 p-0 sm:px-8 md:block">
      {data?.map((el) => (
        <ScheduleCard isAll={isAll} scheduleItem={el} key={el.fixture.id} />
      ))}
    </ul>
  );
};

export default FootballTeamCalendar;
