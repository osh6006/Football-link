import useSportStore from "stores/sports-store";
import HomeContainer from "containers/home-container";
import FootballHomeContent from "components/home/football/football-home-content";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <HomeContainer>
      {selectedSport?.value === "foot-ball" && <FootballHomeContent />}
      {selectedSport?.value === "basket-ball" && <FootballHomeContent />}
    </HomeContainer>
  );
};

export default HomePage;
