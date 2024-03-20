import useSportStore from "stores/sports-store";
import HomeContainer from "components/layouts/home-container";
import FootballHomeContent from "components/home/football/football-home-content";
import { Helmet } from "react-helmet-async";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <HomeContainer>
      <Helmet>
        <title>Test</title>
      </Helmet>
      {selectedSport?.value === "foot-ball" && <FootballHomeContent />}
      {selectedSport?.value === "basket-ball" && <FootballHomeContent />}
    </HomeContainer>
  );
};

export default HomePage;
