import PredictHeader from "components/predict/predict-header";
import PredictResult from "components/predict/predict-result";
import SEO from "components/seo/seo";
import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IPredictPageProps {}

const PredictPage: React.FunctionComponent<IPredictPageProps> = () => {
  const theme = useTheme();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-5 min-h-[calc(100dvh-100px)] max-w-[1280px] rounded-xl p-4 text-MediumGrey shadow-md sm:p-8 xl:mx-auto",
      )}
    >
      <SEO pageUrl="/predict" metaImage="" title={`Football Link | Predict`} />
      <PredictHeader />
      <PredictResult />
    </main>
  );
};

export default PredictPage;
