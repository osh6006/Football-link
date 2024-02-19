import { Outlet, useLocation } from "react-router-dom";

import DetailMenuTabs from "components/common/detail-menu-tabs";
import PlayerHeader from "components/player/football/player-header";
import PlayerRootContainer from "components/layouts/player-root-container";
import { usePlayerInfoQuery } from "hooks/services/quries/use-football-query";
import ComponentStatusContainer from "components/layouts/component-status-container";
import Loading from "components/common/loading";

interface IPlayerRootPageProps {}

const PlayerRootPage: React.FunctionComponent<IPlayerRootPageProps> = () => {
  const location = useLocation();
  const playerId = location.pathname.split("/")[3];

  const { data, isLoading, isError, error } = usePlayerInfoQuery(playerId);

  if (isLoading) {
    return (
      <ComponentStatusContainer height="500" state="loading">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer height="500" state="error">
        <h1>{error.message}</h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <PlayerRootContainer>
      <PlayerHeader player={data!} />
      <DetailMenuTabs
        items={[
          { name: "info", path: "/info" },
          { name: "career", path: "/career" },
          { name: "news", path: "/news" },
        ]}
      />
      <div className="mt-6">
        <Outlet />
      </div>
    </PlayerRootContainer>
  );
};

export default PlayerRootPage;
