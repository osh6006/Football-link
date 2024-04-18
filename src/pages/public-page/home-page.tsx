import SEO from "components/seo/seo";
import Title from "components/home/title";
import Banner from "components/home/banner";
import MoreArrow from "components/common/more-arrow";
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
      <div className="max-w-[1100px] xl:mx-auto">
        <Banner />
        <div className="my-4 flex w-full flex-col justify-between gap-4 xl:flex-row">
          <div className="flex-1 space-y-2">
            <Title>
              Live Match
              <MoreArrow path="/live" />
            </Title>
            <HomeLiveTable />
          </div>

          <div className="mt-2 flex-1 space-y-2 sm:mt-0">
            <Title>
              Next Match
              <MoreArrow path="/schedule" />
            </Title>
            <HomeNextTable />
          </div>
        </div>
        <div className="h-[460px] w-full">
          <Title>
            News
            <MoreArrow path="/news" />
          </Title>
          <HomeNewsTable />
        </div>

        <div className="mt-12 space-y-2">
          <Title>
            Rank
            <MoreArrow path="/rank" />
          </Title>
          <HomeTeamRankTable />
        </div>
      </div>

      {/* right */}
      <div className="mx-auto w-full max-w-[1100px] space-y-4 py-2">
        <div className="space-y-2">
          <Title>
            Top scorer
            <MoreArrow path="/rank" />
          </Title>
          <HomePlayerRankTable distance="short" type="goal" />
        </div>

        <div className="space-y-2">
          <Title>
            Top assist
            <MoreArrow path="/rank" />
          </Title>
          <HomePlayerRankTable distance="short" type="assist" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
