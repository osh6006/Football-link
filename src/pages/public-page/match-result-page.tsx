import { componentBackgroundChange } from "utils/util";

import Loading from "components/common/loading";

import { useTheme } from "stores/theme-store";
import { useLocation } from "react-router-dom";
import { useMatchResultQuery } from "hooks/services/quries/use-match-result-query";

import MatchResultBody from "components/match-result/match-result-body";
import MatchResultHeader from "components/match-result/match-result-header";
import SEO from "components/seo/seo";

interface IResultPageProps {}

const MatchResultPage: React.FunctionComponent<IResultPageProps> = () => {
  const theme = useTheme();
  const location = useLocation();
  const matchId = location.pathname.split("/").at(-1);

  const { data, isLoading, isError, error } = useMatchResultQuery(matchId);

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[500px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        <Loading size="md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[500px] w-full items-center justify-center rounded-md p-2 text-xl font-bold shadow-md",
        )}
      >
        {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "relative flex min-h-[285px] w-full items-center justify-center rounded-md p-2 text-xl font-bold shadow-md",
        )}
      >
        Not Match Result 🤔
      </div>
    );
  }

  console.log(data);

  return (
    <main
      className={componentBackgroundChange(
        theme,
        "m-2 max-w-[1000px] rounded-md p-4 text-MediumGrey sm:m-10 sm:p-8 lg:mx-auto",
      )}
    >
      <SEO pageUrl="/match-result" title={`Football Link | Match Result`} />
      <MatchResultHeader
        date={data.fixture.date}
        venue={data.fixture.venue.name}
        homeLogo={data.teams.home.logo}
        homeName={data.teams.home.name}
        homeGoal={data.goals.home}
        awayLogo={data.teams.away.logo}
        awayName={data.teams.away.name}
        awayGoal={data.goals.away}
      />

      <MatchResultBody matchInfo={data} />
    </main>
  );
};

export default MatchResultPage;
