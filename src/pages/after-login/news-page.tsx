import NewsContainer from "containers/news-container";
import { useNewsQuery } from "hooks/services/quries/use-football-query";
import * as React from "react";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
  const { data, isLoading, isError } = useNewsQuery("프리미어리그");

  return <NewsContainer>News</NewsContainer>;
};

export default NewsPage;
