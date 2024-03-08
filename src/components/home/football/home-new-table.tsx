import { componentBackgroundChange } from "utils/util";

import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import { useGlobalNewsQuery } from "hooks/services/quries/use-football-query";

import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";
import HomeNewsCard from "../home-news-card";

interface IHomeNewTableProps {}

const HomeNewTable: React.FunctionComponent<IHomeNewTableProps> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { data, isLoading, isError } = useGlobalNewsQuery(
    selectedLeague?.name!,
    true,
  );

  if (isLoading) {
    return (
      <ComponentStatusContainer height="300" state="loading">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer height="300" state="loading">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "mt-2 max-w-[1000px] rounded-md p-4 shadow-md",
      )}
    >
      <ul className="flex  gap-x-4 overflow-x-scroll">
        {data?.map((el, i) => {
          return (
            <HomeNewsCard
              author={el.author}
              imgUrl={el.urlToImage}
              title={el.title}
              url={el.url}
              desc={el.description}
              date={el.publishedAt}
              key={el.url}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomeNewTable;
