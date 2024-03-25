import { Helmet } from "react-helmet-async";

import Title from "components/home/title";
import Banner from "components/home/banner";
import MoreArrow from "components/common/more-arrow";
import HomeContainer from "components/layouts/home-container";
import HomeNewTable from "components/home/home-new-table";
import TeamRankTable from "components/home/team-rank-table";
import HomeLiveTable from "components/home/home-live-table";
import HomeNextTable from "components/home/home-next-table";
import PlayerRankTable from "components/home/player-rank-table";

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
      <div className="mx-4 max-w-[1100px] xl:mx-auto">
        <Banner />
        <div className="my-4 flex w-full flex-col justify-between gap-x-4 xl:flex-row">
          <div className="flex-1 space-y-2">
            <Title>
              Live Match
              <MoreArrow path="/" />
            </Title>
            <HomeLiveTable />
          </div>

          <div className="flex-1 space-y-2">
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
          {/* <HomeNewTable /> */}
        </div>

        <div className="my-2 space-y-2">
          <Title>
            Rank
            <MoreArrow path="/rank" />
          </Title>
          {/* <TeamRankTable
            season={new Date().getFullYear() - 1 + ""}
            leagueId={selectedLeague?.rapid_football_league_id! + ""}
          /> */}
        </div>
      </div>

      {/* right */}
      {/* <div className="mx-auto w-full max-w-[1100px] space-y-4">
        <div className="space-y-2">
          <Title>
            Top scorer
            <MoreArrow path="/rank" />
          </Title>
          <PlayerRankTable distance="short" type="goal" />
        </div>

        <div className="space-y-2">
          <Title>
            Top assist
            <MoreArrow path="/rank" />
          </Title>
          <PlayerRankTable distance="short" type="assist" />
        </div>
      </div> */}
    </HomeContainer>
  );
};

export default HomePage;
