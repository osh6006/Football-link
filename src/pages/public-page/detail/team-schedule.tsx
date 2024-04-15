import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

import ScheduleResult from "components/schedule/schedule-result";
import ScheduleSelector from "components/schedule/schedule-selector";

import useTeamScheduleStore from "stores/team-schedule-store";
import { useLeagueStore } from "stores/league-store";

interface ITeamScheduleProps {}

const TeamSchedule: React.FunctionComponent<ITeamScheduleProps> = () => {
  const location = useLocation().pathname.split("/");
  const teamId = location[4];
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const currentRange = useTeamScheduleStore((state) => state.currentRange);
  const currentSeason = useTeamScheduleStore((state) => state.currentSeason);
  const setSeason = useTeamScheduleStore((state) => state.setSeason);
  const setDateRange = useTeamScheduleStore((state) => state.setDateRange);

  const handleToday = () => {
    const today = dayjs().format("YYYY-MM-DD");
    setSeason(selectedLeague?.possibleSeasons.at(-1) || null);
    setDateRange({
      from: new Date(today),
      to: new Date(today),
    });
  };

  return (
    <>
      <ScheduleSelector
        currentRange={currentRange}
        currentSeason={currentSeason}
        hadleToday={handleToday}
        setSeason={setSeason}
        setDateRange={setDateRange}
      />
      <ScheduleResult
        currentRange={currentRange}
        currentSeason={currentSeason}
        teamId={teamId}
      />
    </>
  );
};

export default TeamSchedule;
