import { useTheme } from "stores/theme-store";
import SeasonSelecor from "./season-selector";
import DateSelector from "./date-seletor";

interface IScheduleSelectorProps {}

const ScheduleSelector: React.FunctionComponent<IScheduleSelectorProps> = (
  props,
) => {
  const theme = useTheme();

  return (
    <div className="mx-auto flex w-[95%] justify-center gap-x-4 rounded-md bg-LightGreyLightBg  p-5">
      <SeasonSelecor />
      <DateSelector />
      {/* <SelectedDay/> */}
    </div>
  );
};

export default ScheduleSelector;
