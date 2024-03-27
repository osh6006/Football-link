import StatTable from "components/common/stat-table";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { rapidPlayerResponse } from "types/football";

interface IPlayerHeaderProps {
  player?: rapidPlayerResponse;
}

const PlayerHeader: React.FunctionComponent<IPlayerHeaderProps> = ({
  player,
}) => {
  console.log(player);

  const attakerStat = [
    {
      name: "Position",
      value: player?.statistics[0].games?.position,
    },
    {
      name: "Rating",
      value: parseFloat(player?.statistics[0].games?.rating as string).toFixed(
        2,
      ),
    },
    {
      name: "Played",
      value: player?.statistics[0].games?.appearences,
    },

    {
      name: "Goals",
      value: player?.statistics[0].goals?.total,
    },
    { name: "Assist", value: player?.statistics[0].goals?.assists },
    { name: "Shot", value: player?.statistics[0].shots?.total },
    { name: "On target", value: player?.statistics[0].shots?.on },
    {
      name: "Dribble",
      value:
        (
          (Number(player?.statistics[0].dribbles?.success) /
            Number(player?.statistics[0].dribbles?.attempts)) *
          100
        ).toFixed(2) + "%",
    },
  ];

  const midfilderStat = [
    {
      name: "Position",
      value: player?.statistics[0].games?.position,
    },
    {
      name: "Rating",
      value: parseFloat(player?.statistics[0].games?.rating as string).toFixed(
        2,
      ),
    },
    {
      name: "Played",
      value: player?.statistics[0].games?.appearences,
    },

    {
      name: "Goals",
      value: player?.statistics[0].goals?.total,
    },
    { name: "Assist", value: player?.statistics[0].goals?.assists },
    {
      name: "KeyPass",
      value:
        (
          (Number(player?.statistics[0].passes?.key) /
            Number(player?.statistics[0].passes?.total)) *
          100
        ).toFixed(2) + "%",
    },
    {
      name: "Dribble",
      value:
        (
          (Number(player?.statistics[0].dribbles?.success) /
            Number(player?.statistics[0].dribbles?.attempts)) *
          100
        ).toFixed(2) + "%",
    },
    {
      name: "Duel",
      value:
        (
          (Number(player?.statistics[0].dribbles?.success) /
            Number(player?.statistics[0].dribbles?.attempts)) *
          100
        ).toFixed(2) + "%",
    },
  ];

  const defenderStat = [
    {
      name: "Position",
      value: player?.statistics[0].games?.position,
    },
    {
      name: "Rating",
      value: parseFloat(player?.statistics[0].games?.rating as string).toFixed(
        2,
      ),
    },
    {
      name: "Played",
      value: player?.statistics[0].games?.appearences,
    },

    {
      name: "Goals",
      value: player?.statistics[0].goals?.total,
    },
    { name: "Assist", value: player?.statistics[0].goals?.assists },
    {
      name: "Duel",
      value: (
        Number(player?.statistics[0].duels?.won) /
        Number(player?.statistics[0].duels?.total)
      ).toFixed(2),
    },
    {
      name: "Interseption",
      value: player?.statistics[0]?.takles?.interceptions,
    },
  ];

  const goalkeeperStat = [
    {
      name: "Position",
      value: player?.statistics[0].games?.position,
    },
    {
      name: "Rating",
      value: parseFloat(player?.statistics[0].games?.rating as string).toFixed(
        2,
      ),
    },
    {
      name: "Played",
      value: player?.statistics[0].games?.appearences,
    },

    {
      name: "Save",
      value: player?.statistics[0].goals?.saves,
    },
  ];

  return (
    <div className="rounded-md bg-Main p-2 text-White sm:p-10 ">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:gap-x-8 ">
        <div className="flex  w-full flex-1 flex-col items-center justify-between gap-x-8 xl:flex-row">
          <div className="relative w-full rounded-md bg-MainHover p-4  xl:w-[250px] xl:rounded-full xl:p-8">
            <LazyLoadImage
              src={player?.player.photo}
              alt=""
              className="mx-auto aspect-square w-[150px] rounded-full sm:w-[200px] "
            />
            {player?.statistics[0].games.captain ? (
              <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1">
                Captain
              </span>
            ) : null}
            <LazyLoadImage
              src={player?.statistics[0].team.logo}
              alt=""
              className="absolute bottom-2 right-2 max-w-[60px] rounded-full"
            />
          </div>
          <div className="mt-4 h-full text-center xl:mt-0 xl:text-start">
            <h1 className="text-3xl font-bold sm:mt-0 sm:text-5xl ">
              {player?.player?.name}
            </h1>
            <p className="mt-4 flex w-full justify-between sm:text-xl">
              <span className="text-slate-300">Age</span> {player?.player.age}
            </p>
            <p className="flex w-full justify-center sm:justify-end sm:text-xl">
              <span className="hidden text-slate-300 ">Physical</span>{" "}
              {`${player?.player.height} / ${player?.player.weight}`}
            </p>
          </div>
        </div>

        <StatTable
          items={
            player?.statistics[0].games.position === "Attacker"
              ? attakerStat
              : player?.statistics[0].games.position === "Midfielder"
                ? midfilderStat
                : player?.statistics[0].games.position === "Defender"
                  ? defenderStat
                  : player?.statistics[0].games.position === "Goalkeeper"
                    ? goalkeeperStat
                    : []
          }
        />
      </div>
    </div>
  );
};

export default PlayerHeader;
