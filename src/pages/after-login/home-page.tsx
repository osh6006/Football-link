import Banner from "components/home/banner";
import HomeContainer from "containers/home-container";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <HomeContainer>
      <Banner />
      <div>test2</div>
    </HomeContainer>
  );
};

export default HomePage;
