import RankContent from "components/rank/football/rank-contents";
import RankContainer from "components/layouts/rank-container";
import useSportStore from "stores/sports-store";

interface IRankPageProps {}

const RankPage: React.FunctionComponent<IRankPageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <RankContainer>
      {selectedSport?.value === "foot-ball" && <RankContent />}
    </RankContainer>
  );
};

export default RankPage;
