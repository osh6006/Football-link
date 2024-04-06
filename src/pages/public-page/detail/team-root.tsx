import { Outlet, useLocation, useOutletContext } from "react-router-dom";

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
import { useTeamInfoQuery } from "hooks/services/quries/use-team-query";
import { useLeagueStore } from "stores/league-store";

type ContextType = {
  teamInfo?: rapidFootballTeamInfoResponse;
  coachInfo?: rapidFootballCoachInfoResponse;
  teamAllStanding?: rapidFootballTeamDetailStandingResponse[];
};

interface ITeamPageProps {}

const TeamRootPage: React.FunctionComponent<ITeamPageProps> = () => {
  const location = useLocation().pathname.split("/");
  const teamId = location[4];
  const season = useLeagueStore((state) => state.selectedLeague?.season);

  const { data, isLoading, isError } = useTeamInfoQuery(
    teamId,
    season as string,
  );

  const teamInfo = data?.teamInfo;
  const coachInfo = data?.coachInfo;
  const league = data?.teamPlayLeagues.filter(
    (el) => el.league.type === "League",
  )[0];
  const teamData = data?.teamAllStanding.filter(
    (el) => el.league.id === league?.league.id,
  );

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
        <h1>An error occurred while trying to fetch data 🤮</h1>
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
        teamStanding={teamData || []}
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
      <div className="mt-4 bg-inherit">
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
