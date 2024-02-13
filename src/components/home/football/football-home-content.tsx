import useLeagueStore from "stores/league-store";

import Banner from "../banner";
import Title from "../title";
import TeamRankTable from "./team-rank-table";
import HomeLiveTable from "./home-live-table";
import HomeNextTable from "./home-next-table";
import PlayerRankTable from "./player-rank-table";
import HomeNewTable from "./home-new-table";
import MoreArrow from "components/common/more-arrow";

interface IFootballHomeContentProps {}

const FootballHomeContent: React.FunctionComponent<
  IFootballHomeContentProps
> = () => {
  const { selectedLeague } = useLeagueStore();

  return (
    <>
      <div className="space-y-4">
        <Banner />
        <div className="mt-2">
          <Title>
            소식
            <MoreArrow path="/news" />
          </Title>
          <HomeNewTable />
        </div>
        <div className="mt-2 space-y-2">
          <Title>
            종합 순위
            <MoreArrow path="/rank" />
          </Title>
          <TeamRankTable
            season={new Date().getFullYear() - 1 + ""}
            leagueId={selectedLeague?.rapid_football_league_id! + ""}
          />
        </div>
      </div>

      {/* right */}
      <div className="space-y-6">
        <div className="mt-4 space-y-2 xl:mt-0">
          <Title>
            라이브 경기
            <MoreArrow path="/" />
          </Title>
          <HomeLiveTable />
        </div>

        <div className="space-y-2">
          <Title>
            다음 경기
            <MoreArrow path="/schedule" />
          </Title>
          <HomeNextTable />
        </div>

        <div className="space-y-2">
          <Title>
            최다 골
            <MoreArrow path="/rank" />
          </Title>
          <PlayerRankTable distance="short" type="goal" />
        </div>

        <div className="space-y-2">
          <Title>
            최다 도움
            <MoreArrow path="/rank" />
          </Title>
          <PlayerRankTable distance="short" type="assist" />
        </div>
      </div>
    </>
  );
};

export default FootballHomeContent;
