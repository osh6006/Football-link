import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";
import { useLocalNewsQuery } from "hooks/services/quries/use-football-query";
import useLeagueStore from "stores/league-store";
import ComponentStatusContainer from "components/layouts/component-status-container";
import Loading from "components/common/loading";

interface IHomeNewTableProps {}

const HomeNewTable: React.FunctionComponent<IHomeNewTableProps> = (props) => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const { data, isLoading, isError } = useLocalNewsQuery(
    selectedLeague?.kr_name!,
    true,
  );

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

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
        "mt-2 rounded-md p-4 shadow-md",
      )}
    >
      <ul className="space-y-4">
        {data?.map((el, i) => {
          if (i >= 6) return null;
          return (
            <li
              onClick={() => openInNewTab(el.link)}
              key={i}
              className="w-full"
            >
              <h2
                className="cursor-pointer font-semibold underline transition-colors hover:text-Main"
                dangerouslySetInnerHTML={{ __html: el.title }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeNewTable;
