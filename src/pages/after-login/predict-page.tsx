import PredictHeader from "components/predict/predict-header";
import PredictResult from "components/predict/predict-result";
import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IPredictPageProps {}

const PredictPage: React.FunctionComponent<IPredictPageProps> = () => {
  const theme = useTheme();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-xl p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    >
      <PredictHeader />
      <PredictResult />
    </main>
  );
};

export default PredictPage;
