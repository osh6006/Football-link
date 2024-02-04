import Tabs from "components/common/tabs";
import NewsList from "components/news/news-list";
import NewsContainer from "containers/news-container";
import { useNewsQuery } from "hooks/services/quries/use-football-query";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
  // const { data, isLoading, isError } = useNewsQuery("Premier League");

  return (
    <NewsContainer>
      <Tabs defaultTab="global">
        <Tabs.TabContainer>
          <Tabs.Tab id="local">국내 뉴스</Tabs.Tab>
          <Tabs.Tab id="global">해외 뉴스</Tabs.Tab>
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
