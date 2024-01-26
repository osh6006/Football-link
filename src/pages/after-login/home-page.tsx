import useSportStore from "stores/sports-store";

import Banner from "components/home/banner";
import TeamRankTable from "components/home/team-rank-table";
import HomeContainer from "containers/home-container";
import Title from "components/home/title";
import useLeagueStore from "stores/league-store";
import HomeLiveTable from "components/home/home-live-table";
import HomeNextTable from "components/home/home-next-table";
import PlayerRankTable from "components/home/player-rank-table";
import ErrorComponent from "components/common/error-component";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();
  const { selectedLeague } = useLeagueStore();

  console.log(selectedLeague);

  if (!selectedLeague) {
    return (
      <div className="mt-60 flex items-center justify-center">
        <ErrorComponent>리그를 선택해 주세요!</ErrorComponent>
      </div>
    );
  }

  return (
    <HomeContainer>
      {/* left */}
      <div className="space-y-4">
        <Banner />
        <div className="mt-2 space-y-2">
          <Title>순위</Title>
          <TeamRankTable sports={selectedSport!} />
        </div>
      </div>

      {/* right */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Title>라이브 경기</Title>
          <HomeLiveTable />
        </div>

        <div className="space-y-2">
          <Title>다음 경기</Title>
          <HomeNextTable />
        </div>

        <div className="space-y-2">
          <Title>최다 골</Title>
          <PlayerRankTable distance="short" type="goal" />
        </div>

        <div className="space-y-2">
          <Title>최다 도움</Title>
          <PlayerRankTable distance="short" type="assist" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
