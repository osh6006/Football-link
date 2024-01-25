import useSportStore from "stores/sports-store";

import Banner from "components/home/banner";
import TeamRankTable from "components/home/team-rank-table";
import HomeContainer from "containers/home-container";
import Title from "components/home/title";
import useLeagueStore from "stores/league-store";
import HomeLiveTable from "components/home/home-live-table";
import HomeNextTable from "components/home/home-next-table";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();
  const { selectedLeague } = useLeagueStore();

  return (
    <HomeContainer>
      {/* left */}
      <div className="space-y-4">
        <Banner />
        <div className="mt-2 space-y-2">
          <Title>{selectedLeague?.name} 현황</Title>
          <TeamRankTable sports={selectedSport!} />
        </div>
      </div>

      {/* right */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Title>Live Matches</Title>
          <HomeLiveTable />
        </div>

        <div className="space-y-2">
          <Title>Next Matches</Title>
          <HomeNextTable />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
