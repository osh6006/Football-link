import { useNewsQuery } from "hooks/services/quries/use-football-query";
import useLeagueStore from "stores/league-store";

interface INewsListProps {
  type: "local" | "global";
}

interface INewsItem {}

const NewsItem: React.FC<INewsItem> = () => {
  return <li></li>;
};

const NewsList: React.FunctionComponent<INewsListProps> = ({ type }) => {
  const { selectedLeague } = useLeagueStore();

  return <ul className=""></ul>;
};

export default NewsList;
