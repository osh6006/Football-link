import useSportStore from "stores/sports-store";

import Banner from "components/home/banner";
import TeamRankTable from "components/home/team-rank-table";
import HomeContainer from "containers/home-container";
import Title from "components/home/title";
import useLeagueStore from "stores/league-store";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();
  const { selectedLeague } = useLeagueStore();

  return (
    <HomeContainer>
      <div className="space-y-4">
        <Banner />

        <div className="mt-2 space-y-2">
          <Title>{selectedLeague?.name} 현황</Title>
          <TeamRankTable sports={selectedSport!} />
        </div>
      </div>
      <div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
