import Banner from "components/home/banner";
import HomeContainer from "containers/home-container";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <HomeContainer>
      <div>
        <Banner />
        {/* RankTable */}
      </div>
      <div>
        <div>test</div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
