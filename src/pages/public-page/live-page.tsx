import { componentBackgroundChange } from "utils/util";

import SEO from "components/seo/seo";
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
      <SEO pageUrl="/live" title={`Football Link | Live`} />
      <LiveList />
    </main>
  );
};

export default LivePage;
