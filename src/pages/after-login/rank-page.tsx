import FootballRankContent from "components/rank/football/football-rank-contents";
import RankContainer from "containers/rank-container";
import useSportStore from "stores/sports-store";

interface IRankPageProps {}

const RankPage: React.FunctionComponent<IRankPageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <RankContainer>
      {selectedSport?.value === "foot-ball" && <FootballRankContent />}
    </RankContainer>
  );
};

export default RankPage;
