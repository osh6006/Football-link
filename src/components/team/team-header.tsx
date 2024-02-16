import { faker } from "@faker-js/faker";

interface ITeamHeaderProps {
  teamLogo: string;
  coach: string;
  venue: string;
  name: string;
}

const TeamHeader: React.FunctionComponent<ITeamHeaderProps> = ({
  teamLogo,
  coach,
  venue,
  name,
}) => {
  return (
    <div className="flex  w-full flex-1 flex-col items-center justify-between gap-x-8 xl:flex-row">
      <div className="w-full rounded-md bg-MainHover p-4  xl:w-[250px] xl:rounded-full xl:p-8">
        <img
          src={teamLogo}
          alt=""
          className="mx-auto aspect-square w-[150px] rounded-full sm:w-[200px] "
        />
      </div>
      <div className="mt-4 h-full text-center xl:mt-0 xl:text-start">
        <h1 className="text-3xl font-bold sm:mt-0 sm:text-5xl">LiverPool</h1>
        <p className="mt-4 sm:text-xl">
          <span className="text-slate-300">Coach</span> {coach}
        </p>
        <p className="sm:text-xl">
          <span className="text-slate-300">Venue</span> {venue}
        </p>
      </div>
    </div>
  );
};

export default TeamHeader;
