import SeasonSelector from "components/common/season-selector";
import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "containers/schedule-container";
import useSeasonSelector from "hooks/use-season-selector";
import useSportStore from "stores/sports-store";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const { selectedSport } = useSportStore();
  const { season, handleSeasonDecrese, handleSeasonIncrese, handleSetSeason } =
    useSeasonSelector();

  return (
    <ScheduleContainer>
      <div className="mx-auto">
        <SeasonSelector
          season={season}
          handleSeasonDecrese={handleSeasonDecrese}
          handleSeasonIncrese={handleSeasonIncrese}
          handleSetSeason={handleSetSeason}
        />
      </div>
      {selectedSport?.name === "soccer" && <FootballCalendar season={season} />}
    </ScheduleContainer>
  );
};

export default SchedulePage;
