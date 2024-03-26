import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";
import FootballLiveList from "components/live/football/football-live-list";

interface ILivePageProps {}

const LivePage: React.FunctionComponent<ILivePageProps> = () => {
  const theme = useTheme();

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-md p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    >
      <FootballLiveList />
    </main>
  );
};

export default LivePage;
