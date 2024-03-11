import useSportStore from "stores/sports-store";
import useThemeStore from "stores/theme-store";

import LiveList from "components/live/football/live-list";
import { componentBackgroundChange } from "utils/util";

interface ILivePageProps {}

const LivePage: React.FunctionComponent<ILivePageProps> = () => {
  const { theme } = useThemeStore();
  const { selectedSport } = useSportStore();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-xl p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    >
      {selectedSport?.value === "foot-ball" ? <LiveList /> : null}
    </main>
  );
};

export default LivePage;
