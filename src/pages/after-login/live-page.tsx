import { useTheme } from "stores/theme-store";
import useSportStore from "stores/sports-store";
import { componentBackgroundChange } from "utils/util";
import FootballLiveList from "components/live/football/football-live-list";

interface ILivePageProps {}

const LivePage: React.FunctionComponent<ILivePageProps> = () => {
  const theme = useTheme();
  const { selectedSport } = useSportStore();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-xl p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    >
      {selectedSport?.value === "foot-ball" ? <FootballLiveList /> : null}
    </main>
  );
};

export default LivePage;
