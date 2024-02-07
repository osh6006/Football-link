import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "containers/schedule-container";
import useSportStore from "stores/sports-store";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <ScheduleContainer>
      {selectedSport?.name === "soccer" && <FootballCalendar />}
    </ScheduleContainer>
  );
};

export default SchedulePage;
