import SEO from "components/seo/seo";
import Banner from "components/home/banner";
import HomeNewsTable from "components/home/home-news-table";
import HomeLiveTable from "components/home/home-live-table";
import HomeNextTable from "components/home/home-next-table";
import HomeContainer from "components/layouts/home-container";
import HomeTeamRankTable from "components/home/home-team-rank-table";
import HomePlayerRankTable from "components/home/home-player-rank-table";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <HomeContainer>
      <SEO pageUrl="/" title={`Football Link | Home`} />
      {/* left */}
      <div className="max-w-[1100px] space-y-4 xl:mx-auto">
        <Banner />
        <div className="my-4 flex w-full flex-col justify-between gap-4 xl:flex-row">
          <HomeLiveTable />
          <HomeNextTable />
        </div>
        <HomeNewsTable />
        <HomeTeamRankTable />
      </div>

      {/* right */}
      <div className="mx-auto w-full max-w-[1100px] space-y-4 py-2">
        <div className="flex-col flex sm:flex-row gap-4 2xl:flex-col">
          <HomePlayerRankTable distance="short" type="goal" />
          <HomePlayerRankTable distance="short" type="assist" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
