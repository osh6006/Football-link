import useSportStore from "stores/sports-store";

import Banner from "components/home/banner";
import TeamRankTable from "components/home/team-rank-table";
import HomeContainer from "containers/home-container";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();
  return (
    <HomeContainer>
      <div className="space-y-4">
        <Banner />
        <TeamRankTable sports={selectedSport!} />
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
