import { Outlet } from "react-router-dom";

import DetailMenuTabs from "components/common/detail-menu-tabs";
import PlayerHeader from "components/player/football/player-header";
import PlayerRootContainer from "components/layouts/player-root-container";
import { useState } from "react";

interface IPlayerRootPageProps {}

const PlayerRootPage: React.FunctionComponent<IPlayerRootPageProps> = () => {
  const [test, setTest] = useState(null);

  return (
    <PlayerRootContainer>
      <PlayerHeader player={"asdF"} />
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
