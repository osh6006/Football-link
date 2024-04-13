import SEO from "components/seo/seo";

import ScheduleResult from "components/schedule/schedule-result";
import ScheduleSelector from "components/schedule/schedule-selector";
import ScheduleContainer from "components/layouts/schedule-container";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  return (
    <ScheduleContainer>
      <SEO pageUrl="/schedule" title={`Football Link | Schedule`} />
      <ScheduleSelector />
      <ScheduleResult />
    </ScheduleContainer>
  );
};

export default SchedulePage;
