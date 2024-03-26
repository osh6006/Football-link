import Tabs from "components/common/tabs";
import NewsList from "components/news/news-list";
import NewsContainer from "components/layouts/news-container";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = () => {
  return (
    <NewsContainer>
      <Tabs defaultTab="global">
        <Tabs.TabContainer>
          <Tabs.Tab id="local" className="text-xl">
            Local
          </Tabs.Tab>
          <Tabs.Tab id="global" className="text-xl">
            Global
          </Tabs.Tab>
        </Tabs.TabContainer>
        <Tabs.TabPanel id="local">
          <NewsList type="local" />
        </Tabs.TabPanel>
        <Tabs.TabPanel id="global">
          <NewsList type="global" />
        </Tabs.TabPanel>
      </Tabs>
    </NewsContainer>
  );
};

export default NewsPage;
