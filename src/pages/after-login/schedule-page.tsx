import Menu from "components/common/menu";
import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "containers/schedule-container";
import useSportStore from "stores/sports-store";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <ScheduleContainer>
      <Menu>
        <Menu.MenuButton className="text-xl">Menu!</Menu.MenuButton>
        <Menu.MenuContainer>
          <Menu.MenuItem>asdf</Menu.MenuItem>
        </Menu.MenuContainer>
      </Menu>
      {selectedSport?.name === "soccer" && <FootballCalendar />}
    </ScheduleContainer>
  );
};

export default SchedulePage;
