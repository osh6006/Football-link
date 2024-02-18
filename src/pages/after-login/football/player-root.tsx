import PlayerRootContainer from "components/layouts/player-root-container";
import * as React from "react";
import { useMatches } from "react-router-dom";

interface IPlayerRootPageProps {}

const PlayerRootPage: React.FunctionComponent<IPlayerRootPageProps> = (
  props,
) => {
  const playerId = useMatches()[0].params.playerId;
  console.log(playerId);

  // TODO : 데이터 fetching

  return <PlayerRootContainer>PlayerRoot</PlayerRootContainer>;
};

export default PlayerRootPage;
