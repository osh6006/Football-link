import useSportStore from "stores/sports-store";
import HomeContainer from "containers/home-container";
import FoorballPageContent from "components/home/football/football-page-content";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { selectedSport } = useSportStore();

  return (
    <HomeContainer>
      {selectedSport?.value === "foot-ball" && <FoorballPageContent />}
      {selectedSport?.value === "basket-ball" && <FoorballPageContent />}
    </HomeContainer>
  );
};

export default HomePage;
