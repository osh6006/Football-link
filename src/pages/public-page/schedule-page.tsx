import { useState } from "react";

import DaySelector from "components/schedule/day-selector";
import YearSelector from "components/schedule/year-selector";
import ScheduleContainer from "components/layouts/schedule-container";
import ScheduleResult from "components/schedule/schedule-result";
import SEO from "components/seo/seo";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const [isAll, setIsAll] = useState(true);

  return (
    <ScheduleContainer>
      <SEO pageUrl="/schedule" title={`Football Link | Schedule`} />
      <YearSelector setIsAll={setIsAll} />
      <DaySelector isAll={isAll} setIsAll={setIsAll} />
      <ScheduleResult isAll={isAll} />
    </ScheduleContainer>
  );
};

export default SchedulePage;
