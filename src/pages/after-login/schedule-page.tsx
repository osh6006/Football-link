import { useState } from "react";
import useSportStore from "stores/sports-store";
import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

import DaySelector from "components/schedule/day-selector";
import YearSelector from "components/schedule/year-selector";
import FootballCalendar from "components/schedule/football-calendar";
import ScheduleContainer from "containers/schedule-container";

interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => {
  const { theme } = useThemeStore();
  const { selectedSport } = useSportStore();

  const [isAll, setIsAll] = useState(true);

  return (
    <ScheduleContainer>
      <div
        className={componentBackgroundChange(
          theme,
          "mx-auto max-w-5xl rounded-md p-4 shadow-md sm:p-8",
        )}
      >
        <YearSelector setIsAll={setIsAll} />
        <DaySelector isAll={isAll} setIsAll={setIsAll} />
        {selectedSport?.name === "soccer" && <FootballCalendar isAll={isAll} />}
      </div>
    </ScheduleContainer>
  );
};

export default SchedulePage;
