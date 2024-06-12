import dayjs from "dayjs";
import { DateRange } from "react-day-picker";

import ScheduleCard from "./schedule.card";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useLeagueStore } from "stores/league-store";
import { useScheduleQuery } from "hooks/tanstack-query/use-schedule-query";

import { ILeagueSeason } from "types";

interface IScheduleResultProps {
  currentSeason: ILeagueSeason | null;
  currentRange: DateRange | undefined;
  teamId?: string;
}

const ScheduleResult: React.FunctionComponent<IScheduleResultProps> = ({
  currentRange,
  currentSeason,
  teamId,
}) => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const start = dayjs(currentRange?.from).format("YYYY-MM-DD");
  const end = dayjs(currentRange?.to).format("YYYY-MM-DD");

  const { data, isLoading, isError } = useScheduleQuery({
    start: start!,
    end: end!,
    season: currentSeason?.year!,
    leagueId: selectedLeague?.leagueId!,
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
        <ScheduleCard scheduleItem={el} key={el.fixture.id} />
      ))}
    </ul>
  );
};
export default ScheduleResult;
