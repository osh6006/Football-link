import { componentBackgroundChange } from "utils/util";

import LiveList from "components/live/live-list";

import { useTheme } from "stores/theme-store";

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
      <LiveList />
    </main>
  );
};

export default LivePage;
