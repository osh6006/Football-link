import { faker } from "@faker-js/faker";
import TeamRootContainer from "components/layouts/team-root-container";
import TeamMenuTabs from "components/team/team-menu-tabs";
import { Outlet, useMatches } from "react-router-dom";

interface ITeamPageProps {}

const TeamRootPage: React.FunctionComponent<ITeamPageProps> = () => {
  const teamId = useMatches()[0].params.teamId;

  // TODO : Team Stat

  return (
    <TeamRootContainer>
      <div className="rounded-md bg-Main p-2 text-White sm:p-10 ">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-x-8 ">
          <div className="flex w-full flex-1 flex-col items-center justify-between gap-x-10 xl:flex-row">
            <div className="w-full rounded-md bg-MainHover p-4  xl:w-[250px] xl:rounded-full xl:p-8">
              <img
                src={faker.image.urlPicsumPhotos()}
                alt=""
                className="mx-auto aspect-square w-[150px] rounded-full sm:w-[200px] "
              />
            </div>
            <div className="mt-4 text-center xl:mt-0 xl:text-start">
              <h1 className="text-3xl font-bold sm:mt-0 sm:text-5xl">
                LiverPool
              </h1>
              <p className="mt-4 sm:text-xl">
                <span className="text-slate-300">Coach</span> 위르겐 클롭
              </p>
              <p className="sm:text-xl">
                <span className="text-slate-300">Venue</span> 안필드
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex w-full flex-col gap-x-4 px-2 text-xl xl:w-fit xl:flex-1 xl:flex-col">
            <div
              className="py-2 text-center font-semibold after:my-2
              after:hidden after:h-[3px] after:w-[15px] after:bg-White after:content-[''] xl:text-start
              after:xl:block"
            >
              23/24 Season
            </div>
            <div className="mt-4 grid w-full grid-cols-4 gap-4 text-center xl:mt-0 xl:text-start">
              <dl>
                <dt className="text-base text-slate-300">Rank</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Win</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Draw</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Lose</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Points</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Goals</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Conceded</dt>
                <dd className="text-2xl">1</dd>
              </dl>
              <dl>
                <dt className="text-base text-slate-300">Played</dt>
                <dd className="text-2xl">1</dd>
              </dl>
            </div>
          </div>
        </div>

        {/* Render Props Pattern 으로 만들기 */}

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
        <Outlet />
      </div>
    </TeamRootContainer>
  );
};

export default TeamRootPage;
