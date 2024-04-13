import dayjs from "dayjs";

import ScheduleCard from "./schedule.card";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import useScheduleStore from "stores/schedule-store";
import { useLeagueStore } from "stores/league-store";
import { useScheduleQuery } from "hooks/services/quries/use-schedule-query";

interface IScheduleResultProps {}

const ScheduleResult: React.FunctionComponent<IScheduleResultProps> = () => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const currentSeason = useScheduleStore((state) => state.currentSeason);
  const currentRange = useScheduleStore((state) => state.currentRange);

  const start = dayjs(currentRange?.from).format("YYYY-MM-DD");
  const end = dayjs(currentRange?.to).format("YYYY-MM-DD");

  const { data, isLoading, isError } = useScheduleQuery({
    start: start!,
    end: end!,
    season: currentSeason?.year!,
    leagueId: selectedLeague?.leagueId!,
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
        <p>An error occurred while trying to fetch data 🤮</p>
      </ComponentStatusContainer>
    );
  }

  return (
    <ul className=" mt-6 w-full space-y-4 p-0 sm:px-8 md:block">
      {data?.map((el) => (
        <ScheduleCard scheduleItem={el} key={el.fixture.id} />
      ))}
    </ul>
  );
};
export default ScheduleResult;
