import { useState } from "react";

import DaySelector from "components/schedule/day-selector";
import YearSelector from "components/schedule/year-selector";
import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "components/layouts/schedule-container";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const [isAll, setIsAll] = useState(true);

  return (
    <ScheduleContainer>
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
      <FootballCalendar isAll={isAll} />
    </ScheduleContainer>
  );
};

export default SchedulePage;
