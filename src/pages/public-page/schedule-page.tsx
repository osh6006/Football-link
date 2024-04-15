import dayjs from "dayjs";

import SEO from "components/seo/seo";
import ScheduleResult from "components/schedule/schedule-result";
import ScheduleSelector from "components/schedule/schedule-selector";
import ScheduleContainer from "components/layouts/schedule-container";

import { useLeagueStore } from "stores/league-store";
import useScheduleStore from "stores/schedule-store";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const leagueStore = useLeagueStore((state) => state.selectedLeague);

  const currentRange = useScheduleStore((state) => state.currentRange);
  const currentSeason = useScheduleStore((state) => state.currentSeason);
  const setSeason = useScheduleStore((state) => state.setSeason);
  const setDateRange = useScheduleStore((state) => state.setDateRange);

  const handleToday = () => {
    const today = dayjs().format("YYYY-MM-DD");
    setSeason(leagueStore?.possibleSeasons.at(-1) || null);
    setDateRange({
      from: new Date(today),
      to: new Date(today),
    });
  };

  return (
    <ScheduleContainer>
      <SEO pageUrl="/schedule" title={`Football Link | Schedule`} />
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
      />
    </ScheduleContainer>
  );
};

export default SchedulePage;
