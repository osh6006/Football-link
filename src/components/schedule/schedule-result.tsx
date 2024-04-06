import dayjs from "dayjs";

import Loading from "components/common/loading";
import ScheduleCard from "./schedule.card";
import ComponentStatusContainer from "components/layouts/component-status-container";

import useScheduleStore from "stores/schedule-store";
import { useLeagueStore } from "stores/league-store";
import { useScheduleQuery } from "hooks/services/quries/use-schedule-query";

interface IScheduleResultProps {
  isAll: boolean;
}

const ScheduleResult: React.FunctionComponent<IScheduleResultProps> = ({
  isAll,
}) => {
  const { currentDate } = useScheduleStore();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const formatDate = dayjs(currentDate);
  const firstDayOfMonth = formatDate.startOf("month").format("YYYY-MM-DD");
  const lastDayOfMonth = formatDate.endOf("month").format("YYYY-MM-DD");

  const lastYear =
    selectedLeague?.possibleSeasons.at(-1)?.year || new Date().getFullYear();
  const season = formatDate.year() > lastYear ? lastYear : formatDate.year();

  const { data, isLoading, isError } = useScheduleQuery({
    isAll,
    date: currentDate,
    start: firstDayOfMonth,
    end: lastDayOfMonth,
    season: season,
    leagueId: selectedLeague?.leagueId!,
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
export default ScheduleResult;
