import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";
import TeamRootContainer from "components/layouts/team-root-container";
import TeamHeader from "components/team/team-header";
import TeamMenuTabs from "components/team/team-menu-tabs";
import TeamStatTable from "components/team/team-stat-table";
import { useTeamInfoQuery } from "hooks/services/quries/use-football-query";
import { Outlet, useMatches } from "react-router-dom";
import useLeagueStore from "stores/league-store";

interface ITeamPageProps {}

const TeamRootPage: React.FunctionComponent<ITeamPageProps> = () => {
  const teamId = useMatches()[0].params.teamId;

  const { selectedLeague } = useLeagueStore();

  const { data, isLoading, isError } = useTeamInfoQuery(teamId!);
  // const {data: teamStat}

  // let {
  //   state: { teamData },
  // } = useLocation();

  const teamInfo = data?.teamInfo;
  const teamStanding = data?.teamStanding[0].league;
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

  console.log(teamStanding?.standings[0][0]);

  return (
    <TeamRootContainer>
      <div className="rounded-md bg-Main p-2 text-White sm:p-10 ">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-x-8 ">
          <TeamHeader
            teamLogo={teamInfo?.team.logo!}
            coach={coachInfo?.name!}
            name={teamInfo?.team.name!}
            venue={teamInfo?.venue.name!}
          />
          <TeamStatTable
            items={[
              {
                name: "Rank",
                value: teamStanding?.standings[0][0].rank!,
              },
              {
                name: "Win",
                value: teamStanding?.standings[0][0].all.win!,
              },
              { name: "Draw", value: teamStanding?.standings[0][0].all.draw! },
              { name: "Lose", value: teamStanding?.standings[0][0].all.lose! },
              { name: "Points", value: teamStanding?.standings[0][0].points! },
              {
                name: "Goals",
                value: teamStanding?.standings[0][0].all.goals?.for,
              },
              {
                name: "GoalsDiff",
                value: teamStanding?.standings[0][0].goalsDiff,
              },
              {
                name: "Played",
                value: teamStanding?.standings[0][0].all.played,
              },
            ]}
          />
        </div>

        <TeamMenuTabs
          items={[
            { name: "info", path: "/info" },
            { name: "lineUp", path: "/lineUp" },
            { name: "news", path: "/news" },
            { name: "schedule", path: "/schedule" },
          ]}
        />
      </div>

      {/* Child */}
      <div className="mt-4">
        <Outlet
          context={{
            teamInfo,
            teamStanding,
            coachInfo,
          }}
        />
      </div>
    </TeamRootContainer>
  );
};

export default TeamRootPage;
