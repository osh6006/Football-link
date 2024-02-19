import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { useTeamInfoQuery } from "hooks/services/quries/use-football-query";

import Loading from "components/common/loading";
import TeamHeader from "components/team/football/team-header";
import TeamRootContainer from "components/layouts/team-root-container";
import ComponentStatusContainer from "components/layouts/component-status-container";

import {
  rapidFootballCoachInfoResponse,
  rapidFootballTeamDetailStandingResponse,
  rapidFootballTeamInfoResponse,
} from "types/football";
import DetailMenuTabs from "components/common/detail-menu-tabs";

type ContextType = {
  teamInfo?: rapidFootballTeamInfoResponse;
  coachInfo?: rapidFootballCoachInfoResponse;
  teamAllStanding?: rapidFootballTeamDetailStandingResponse[];
};

interface ITeamPageProps {}

const TeamRootPage: React.FunctionComponent<ITeamPageProps> = () => {
  const location = useLocation().pathname.split("/");
  const leagueId = location[2];
  const teamId = location[4];

  const { data, isLoading, isError } = useTeamInfoQuery(teamId);

  const teamInfo = data?.teamInfo;
  const coachInfo = data?.coachInfo;
  const teamData = data?.teamAllStanding.filter(
    (el) => el.league.id + "" === leagueId,
  );

  console.log(data);

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
        teamStanding={teamData!}
      />

      <DetailMenuTabs
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
              teamAllStanding: data?.teamAllStanding,
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
