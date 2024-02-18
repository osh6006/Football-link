import { faker } from "@faker-js/faker";
import StatTable from "components/common/stat-table";

interface IPlayerHeaderProps {
  player: any;
}

const PlayerHeader: React.FunctionComponent<IPlayerHeaderProps> = () => {
  return (
    <div className="rounded-md bg-Main p-2 text-White sm:p-10 ">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-x-8 ">
        <div className="flex  w-full flex-1 flex-col items-center justify-between gap-x-8 xl:flex-row">
          <div className="w-full rounded-md bg-MainHover p-4  xl:w-[250px] xl:rounded-full xl:p-8">
            <img
              src={faker.image.avatar()}
              alt=""
              className="mx-auto aspect-square w-[150px] rounded-full sm:w-[200px] "
            />
          </div>
          <div className="mt-4 h-full text-center xl:mt-0 xl:text-start">
            <h1 className="text-3xl font-bold sm:mt-0 sm:text-5xl">Gamst</h1>
            <p className="mt-4 flex w-full justify-between sm:text-xl">
              <span className="text-slate-300">Years</span> Test
            </p>
            <p className="flex w-full justify-between sm:text-xl">
              <span className="text-slate-300">Physical</span> Test
            </p>
          </div>
        </div>

        <StatTable
          items={[
            {
              name: "Rank",
              value: 1,
            },
            {
              name: "Win",
              value: 1,
            },
            { name: "Draw", value: 1 },
            { name: "Lose", value: 2 },
            { name: "Points", value: 3 },
            {
              name: "Goals",
              value: 4,
            },
            {
              name: "GoalsDiff",
              value: 5,
            },
            {
              name: "Played",
              value: 6,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PlayerHeader;
