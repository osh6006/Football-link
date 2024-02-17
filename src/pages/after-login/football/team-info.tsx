import { useOutletContext } from "react-router-dom";
import { useTeamRoot } from "./team-root";

interface ITeamInfoProps {}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-xl font-bold">{children}</h1>;
};

const TeamInfo: React.FunctionComponent<ITeamInfoProps> = () => {
  const { coachInfo, teamInfo, teamStanding } = useTeamRoot();

  console.log(teamStanding);

  return (
    <div className="space-y-4">
      <section>
        <Title>Team Info</Title>
        <div className="mt-4 flex w-full rounded-md border p-4 sm:gap-x-4 sm:px-6 sm:py-8">
          <div className="hidden flex-col gap-y-4 text-lg sm:flex">
            <span>Team</span>
            <hr />
            <span>Venue</span>
          </div>
          <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-y-4 ">
            <dl className="px-3 ">
              <dt className="text-xs">Country</dt>
              <dd className="font-semibold">{teamInfo?.team.country}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">Founded</dt>
              <dd className="font-semibold">{teamInfo?.team.founded}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">Name</dt>
              <dd className="font-semibold">{teamInfo?.team.name}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">IsNational</dt>
              <dd className="font-semibold">
                {teamInfo?.team.national ? "National" : "Not national"}
              </dd>
            </dl>
            {/*  */}
            <dl className="px-3">
              <dt className="text-xs">Address</dt>
              <dd className="font-semibold">{teamInfo?.venue.address}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">Capacity</dt>
              <dd className="font-semibold">{teamInfo?.venue.capacity}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">Name</dt>
              <dd className="font-semibold">{teamInfo?.venue.name}</dd>
            </dl>
            <dl className="px-3 ">
              <dt className="text-xs">Surface</dt>
              <dd className="font-semibold">{teamInfo?.venue.surface}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Title>League status</Title>
        {teamStanding?.map((el) => (
          <div
            key={el.league.id}
            className="w-full space-y-2 rounded-md border p-4 sm:space-y-4 sm:px-6 sm:py-4"
          >
            <span className="left-3 top-2 font-semibold">{el.league.name}</span>
            <div className="flex flex-col items-center gap-x-2 gap-y-4 sm:flex-row sm:gap-y-0">
              <span className="w-full rounded-md bg-white p-2 sm:mr-10 sm:w-fit">
                <div
                  className="aspect-square h-[65px] w-full bg-contain bg-center sm:h-[75px] sm:w-[75px] "
                  style={{
                    background: `url(${el.league.logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              </span>
              <div className="grid flex-1 grid-cols-4 gap-y-4">
                <dl className="px-3">
                  <dt className="text-xs">Rank</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].rank}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Group</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].group}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Form</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].form}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Season</dt>
                  <dd className="font-semibold">{el.league.season}</dd>
                </dl>
                {/*  */}
                <dl className="px-3">
                  <dt className="text-xs">Played</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].all.played}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Win</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].all.win}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Draw</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].all.draw}
                  </dd>
                </dl>
                <dl className="px-3 ">
                  <dt className="text-xs">Lose</dt>
                  <dd className="font-semibold">
                    {el.league.standings[0][0].all.lose}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamInfo;
