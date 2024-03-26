import { useLocation } from "react-router-dom";

import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { usePlayerCareerQuery } from "hooks/services/quries/use-player-query";

interface IPlayerCareerProps {}

const PlayerCareer: React.FunctionComponent<IPlayerCareerProps> = () => {
  const location = useLocation().pathname.split("/");
  const playerId = location[4];
  const { data, isLoading, isError } = usePlayerCareerQuery(playerId);

  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="500">
        <h1>서버에서 데이터를 불러오던 도중 에러가 발생하였습니다.</h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <ul className="flex flex-col gap-y-2">
      {data?.map((el) => (
        <li className="rounded-md border border-MediumGrey px-2 py-3">{`🏆 ${el.season} ${el.country} ${el.league} ${el.place}`}</li>
      ))}
    </ul>
  );
};

export default PlayerCareer;
