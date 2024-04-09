import StatTable from "components/common/stat-table";
import { rapidFootballTeamDetailStandingResponse } from "types/football";

interface ITeamHeaderProps {
  teamLogo: string;
  coach: string;
  venue: string;
  name: string;
  teamStanding: rapidFootballTeamDetailStandingResponse[];
}

const TeamHeader: React.FunctionComponent<ITeamHeaderProps> = ({
  teamLogo,
  coach,
  venue,
  name,
  teamStanding,
}) => {
  const teamData = teamStanding[0]?.league;

  return (
    <div className="rounded-md bg-Main p-2 text-White sm:p-10 ">
      <div className="flex flex-col items-center justify-between xl:flex-row  xl:gap-x-8 ">
        <div className="flex  w-full flex-1 flex-col items-center justify-between gap-x-8 xl:flex-row xl:items-start">
          <div className="w-full rounded-md bg-MainHover p-4  xl:w-[250px] xl:rounded-full xl:p-8">
            <img
              src={teamLogo}
              alt=""
              className="mx-auto aspect-square w-[150px] rounded-full sm:w-[200px] "
            />
          </div>
          <div className="mt-4 flex flex-col justify-between text-center xl:mt-0 xl:h-[250px] xl:justify-center xl:text-start">
            <h1 className="text-3xl font-bold sm:mt-0 sm:text-5xl">{name}</h1>
            <div>
              <p className="mt-4 flex w-full justify-between sm:text-xl">
                <span className="text-slate-300">Coach</span> {coach}
              </p>
              <p className="flex w-full justify-end text-ellipsis sm:text-xl">
                <span className="hidden text-slate-300">Venue</span> {venue}
              </p>
            </div>
          </div>
        </div>

        <StatTable
          items={[
            {
              name: "Rank",
              value: teamData?.standings[0][0].rank!,
            },
            {
              name: "Win",
              value: teamData?.standings[0][0].all.win!,
            },
            { name: "Draw", value: teamData?.standings[0][0].all.draw! },
            { name: "Lose", value: teamData?.standings[0][0].all.lose! },
            { name: "Points", value: teamData?.standings[0][0].points! },
            {
              name: "Goals",
              value: teamData?.standings[0][0].all.goals?.for,
            },
            {
              name: "GoalsDiff",
              value: teamData?.standings[0][0].goalsDiff,
            },
            {
              name: "Played",
              value: teamData?.standings[0][0].all.played,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TeamHeader;
