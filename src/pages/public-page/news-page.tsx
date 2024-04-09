import SEO from "components/seo/seo";
import NewsList from "components/news/news-list";
import NewsContainer from "components/layouts/news-container";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = () => {
  return (
    <NewsContainer>
      <SEO pageUrl="/news" title={`Football Link | News`} />
      <NewsList type="global" />
    </NewsContainer>
  );
};

export default NewsPage;
