import { useTeamRoot } from "./team-root";
import { useMatches } from "react-router-dom";
import { useTeamSquadQuery } from "hooks/services/quries/use-football-query";

import Avatar from "components/common/avatar";
import Loading from "components/common/loading";
import DetailTitle from "components/common/detail-title";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { SquadPlayer } from "types/football/team";

interface ITeamSquadProps {}

interface IPhothoWrapperProps {
  items: SquadPlayer[];
}
const PhothoWrapper: React.FC<IPhothoWrapperProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
      {items?.map((el) => (
        <div
          className="flex flex-col items-center justify-center gap-y-2"
          key={el.id}
        >
          <Avatar imgUrl={el?.photo!} size="xl" />
          <span className="whitespace-nowrap font-semibold">{el.name}</span>
        </div>
      ))}
    </div>
  );
};

const TeamSquad: React.FunctionComponent<ITeamSquadProps> = () => {
  const teamId = useMatches()[0].params.teamId;
  const { coachInfo } = useTeamRoot();

  const { data, isLoading, isError } = useTeamSquadQuery(teamId!);

  const attackers = data?.players.filter((el) => el.position === "Attacker");
  const midfielders = data?.players.filter(
    (el) => el.position === "Midfielder",
  );
  const defenders = data?.players.filter((el) => el.position === "Defender");
  const goalkeepers = data?.players.filter(
    (el) => el.position === "Goalkeeper",
  );

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
    <div className="space-y-4">
      <section className="space-y-4">
        <DetailTitle>Coach</DetailTitle>
        <div className="grid grid-cols-5 gap-2">
          <div className="flex flex-col items-center gap-y-1">
            <Avatar imgUrl={coachInfo?.photo!} size="xl" />
            <span className="font-semibold">{coachInfo?.name}</span>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <DetailTitle>Attakers</DetailTitle>
        <PhothoWrapper items={attackers!} />

        <DetailTitle>Midfielders</DetailTitle>
        <PhothoWrapper items={midfielders!} />

        <DetailTitle>Defenders</DetailTitle>
        <PhothoWrapper items={defenders!} />

        <DetailTitle>Goalkeeper</DetailTitle>
        <PhothoWrapper items={goalkeepers!} />
      </section>
    </div>
  );
};

export default TeamSquad;
