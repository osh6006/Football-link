import { Outlet, useMatches, useOutletContext } from "react-router-dom";
import { useTeamInfoQuery } from "hooks/services/quries/use-football-query";

import Loading from "components/common/loading";
import TeamHeader from "components/team/team-header";
import TeamMenuTabs from "components/team/team-menu-tabs";
import TeamStatTable from "components/team/team-stat-table";
import TeamRootContainer from "components/layouts/team-root-container";
import ComponentStatusContainer from "components/layouts/component-status-container";

import {
  rapidFootballCoachInfoResponse,
  rapidFootballTeamDetailStandingResponse,
  rapidFootballTeamInfoResponse,
} from "types/football";

type ContextType = {
  teamInfo?: rapidFootballTeamInfoResponse;
  coachInfo?: rapidFootballCoachInfoResponse;
  teamStanding?: rapidFootballTeamDetailStandingResponse[];
};

interface ITeamPageProps {}

const TeamRootPage: React.FunctionComponent<ITeamPageProps> = () => {
  const teamId = useMatches()[0].params.teamId;
  const { data, isLoading, isError } = useTeamInfoQuery(teamId!);

  const teamInfo = data?.teamInfo;
  const coachInfo = data?.coachInfo;

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
        <h1>데이터를 불러오던 도중 오류가 발생하였습니다.</h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <TeamRootContainer>
      <TeamHeader
        teamLogo={teamInfo?.team.logo!}
        coach={coachInfo?.name!}
        name={teamInfo?.team.name!}
        venue={teamInfo?.venue.name!}
        teamStanding={data?.teamStanding!}
      />

      <TeamMenuTabs
        items={[
          { name: "info", path: "/info" },
          { name: "squad", path: "/squad" },
          { name: "news", path: "/news" },
          { name: "schedule", path: "/schedule" },
        ]}
      />

      {/* Child */}
      <div className="mt-4">
        <Outlet
          context={
            {
              teamInfo: data?.teamInfo,
              coachInfo: data?.coachInfo,
              teamStanding: data?.teamStanding,
            } satisfies ContextType
          }
        />
      </div>
    </TeamRootContainer>
  );
};

export function useTeamRoot() {
  return useOutletContext<ContextType>();
}

export default TeamRootPage;
