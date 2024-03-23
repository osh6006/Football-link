import { useTheme } from "stores/theme-store";
import useSportStore from "stores/sports-store";
import { componentBackgroundChange } from "utils/util";

interface IPredictPageProps {}

const PredictPage: React.FunctionComponent<IPredictPageProps> = () => {
  const theme = useTheme();
  const { selectedSport } = useSportStore();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-xl p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    ></main>
  );
};

export default PredictPage;
