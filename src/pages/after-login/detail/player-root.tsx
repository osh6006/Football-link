import { Outlet, useLocation, useOutletContext } from "react-router-dom";

import Loading from "components/common/loading";
import DetailMenuTabs from "components/common/detail-menu-tabs";
import PlayerHeader from "components/player/football/player-header";
import PlayerRootContainer from "components/layouts/player-root-container";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { usePlayerInfoQuery } from "hooks/services/quries/use-player-query";

import { rapidPlayerResponse } from "types/football";

type ContextType = {
  playerInfo: rapidPlayerResponse;
};

interface IPlayerRootPageProps {}

const PlayerRootPage: React.FunctionComponent<IPlayerRootPageProps> = () => {
  const location = useLocation().pathname.split("/");
  const playerId = location[4];

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
        <Outlet
          context={
            {
              playerInfo: data!,
            } satisfies ContextType
          }
        />
      </div>
    </PlayerRootContainer>
  );
};

export function usePlayerRoot() {
  return useOutletContext<ContextType>();
}

export default PlayerRootPage;
