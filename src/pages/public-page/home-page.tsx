import { Helmet } from "react-helmet-async";

import Title from "components/home/title";
import Banner from "components/home/banner";
import MoreArrow from "components/common/more-arrow";
import HomeNewsTable from "components/home/home-news-table";
import HomeLiveTable from "components/home/home-live-table";
import HomeNextTable from "components/home/home-next-table";
import HomeContainer from "components/layouts/home-container";
import HomeTeamRankTable from "components/home/home-team-rank-table";
import HomePlayerRankTable from "components/home/home-player-rank-table";

import { useLeagueStore } from "stores/league-store";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  return (
    <HomeContainer>
      <Helmet>
        <title>{`Home | ${selectedLeague?.name}`}</title>
      </Helmet>
      {/* left */}
      <div className="max-w-[1100px] xl:mx-auto">
        <Banner />
        <div className="my-4 flex w-full flex-col justify-between gap-x-4 xl:flex-row">
          <div className="flex-1 space-y-2">
            <Title>
              Live Match
              <MoreArrow path="/live" />
            </Title>
            <HomeLiveTable />
          </div>

          <div className="mt-2 flex-1 space-y-2 sm:mt-0">
            <Title>
              Next Match
              <MoreArrow path="/schedule" />
            </Title>
            <HomeNextTable />
          </div>
        </div>
        <div className="w-full">
          <Title>
            News
            <MoreArrow path="/news" />
          </Title>
          <HomeNewsTable />
        </div>

        <div className="my-2 space-y-2">
          <Title>
            Rank
            <MoreArrow path="/rank" />
          </Title>
          <HomeTeamRankTable />
        </div>
      </div>

      {/* right */}
      <div className="mx-auto w-full max-w-[1100px] space-y-4">
        <div className="space-y-2">
          <Title>
            Top scorer
            <MoreArrow path="/rank" />
          </Title>
          <HomePlayerRankTable distance="short" type="goal" />
        </div>

        <div className="space-y-2">
          <Title>
            Top assist
            <MoreArrow path="/rank" />
          </Title>
          <HomePlayerRankTable distance="short" type="assist" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
