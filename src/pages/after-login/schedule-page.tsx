import { useState } from "react";
import useSportStore from "stores/sports-store";

import DaySelector from "components/schedule/day-selector";
import YearSelector from "components/schedule/year-selector";
import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "components/layouts/schedule-container";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const { selectedSport } = useSportStore();

  const [isAll, setIsAll] = useState(true);

  return (
    <ScheduleContainer>
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
      {selectedSport?.name === "soccer" && <FootballCalendar isAll={isAll} />}
    </ScheduleContainer>
  );
};

export default SchedulePage;
