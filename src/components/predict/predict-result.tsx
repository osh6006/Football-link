import clsx from "clsx";

import Loading from "components/common/loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useTheme } from "stores/theme-store";
import { usePredicts } from "stores/predict-store";
import { usePredictQuery } from "hooks/services/quries/use-pedict-query";

import { PredictResponse } from "types";

interface IPredictResultProps {}

const PredictResult: React.FunctionComponent<IPredictResultProps> = () => {
  const theme = useTheme();
  const { homeTeam, awayTeam } = usePredicts((state) => state);

  const { data, isLoading, isError } = usePredictQuery(
    homeTeam?.team.id,
    awayTeam?.team.id,
  );

  console.log(data);

  if (isLoading) {
    return (
      <ComponentStatusContainer height={400} state="loading">
        <Loading size="lg" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer height={400} state="loading">
        <div>An error occurred while trying to fetch data 🤮</div>
      </ComponentStatusContainer>
    );
  }

  const homeTeamStat = calTeamStats(data!, homeTeam?.team.name!);
  const awayTeamStat = calTeamStats(data!, awayTeam?.team.name!);

  return homeTeam && awayTeam ? (
    <div className="mx-auto mt-10 max-w-[1000px]">
      <div className="flex items-center justify-between sm:justify-around">
        <div className="flex flex-col items-center gap-y-2">
          <LazyLoadImage
            src={homeTeam?.team.logo}
            alt="homelogo"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 xl:h-28 xl:w-28"
          />
          <h2 className="truncate text-base font-semibold sm:text-xl">
            {homeTeam?.team.name}
          </h2>
        </div>
        <p>VS</p>
        <div className="flex flex-col items-center gap-y-2">
          <LazyLoadImage
            src={awayTeam?.team.logo}
            alt="homelogo"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 xl:h-28 xl:w-28"
          />
          <h2 className="truncate text-base font-semibold sm:text-xl">
            {awayTeam?.team.name}
          </h2>
        </div>
      </div>
      <div className="space-y-6 py-10">
        <div className="">
          <div
            className={clsx(
              "w-full rounded-tl-md rounded-tr-md p-2 text-center",
              theme === "dark" ? "bg-VeryDarkGreyDark " : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
          >
            Head To Head
          </div>
          <dl
            className={clsx(
              "flex items-center justify-between rounded-bl-md rounded-br-md px-2 py-4 sm:justify-around",
              theme === "dark"
                ? "border-2 border-t-0 border-VeryDarkGreyDark "
                : "",
              theme === "light"
                ? "border-2 border-t-0 border-LightGreyLightBg"
                : "",
            )}
          >
            <dd>{`${homeTeamStat.wins || 0}W ${homeTeamStat.draws || 0}D ${
              homeTeamStat.losses || 0
            }L`}</dd>
            <dd>{`${awayTeamStat.wins || 0}W ${awayTeamStat.draws || 0}D ${
              awayTeamStat.losses || 0
            }L`}</dd>
          </dl>
        </div>

        <div className="">
          <div
            className={clsx(
              "w-full rounded-tl-md rounded-tr-md p-2 text-center",
              theme === "dark" ? "bg-VeryDarkGreyDark " : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
          >
            Winrate
          </div>
          <dl
            className={clsx(
              "flex items-center justify-between rounded-bl-md rounded-br-md px-2 py-4 sm:justify-around",
              theme === "dark"
                ? "border-2 border-t-0 border-VeryDarkGreyDark "
                : "",
              theme === "light"
                ? "border-2 border-t-0 border-LightGreyLightBg"
                : "",
            )}
          >
            <dd className="flex flex-col items-center justify-center">
              <span>Win</span>
              <span>{`${homeTeamStat.winrate}%`}</span>
            </dd>
            <dd className="flex flex-col items-center justify-center">
              <span>Draw</span>
              <span>{` ${homeTeamStat.drawrate}%`}</span>
            </dd>
            <dd className="flex flex-col items-center justify-center">
              <span>Win</span>
              <span>{`${awayTeamStat.winrate}%`}</span>
            </dd>
          </dl>
        </div>

        <div className="">
          <div
            className={clsx(
              "w-full rounded-tl-md rounded-tr-md p-2 text-center",
              theme === "dark" ? "bg-VeryDarkGreyDark " : "",
              theme === "light" ? "bg-LightGreyLightBg" : "",
            )}
          >
            Under or Over
          </div>
          <dl
            className={clsx(
              "flex flex-col items-center justify-center rounded-bl-md rounded-br-md px-2 py-4 ",
              theme === "dark"
                ? "border-2 border-t-0 border-VeryDarkGreyDark "
                : "",
              theme === "light"
                ? "border-2 border-t-0 border-LightGreyLightBg"
                : "",
            )}
          >
            <dd>{homeTeamStat.averageScore}</dd>
            <dd>{homeTeamStat.prediction}</dd>
          </dl>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-10 flex h-full min-h-[500px] flex-col items-center justify-center">
      <span className="text-xl capitalize">please select league</span>
      <span className="text-xl capitalize">not data 😣</span>
    </div>
  );
};

export default PredictResult;

function calTeamStats(
  fixtures: PredictResponse[],
  teamName: string,
): {
  wins: number;
  draws: number;
  losses: number;
  winrate: string;
  drawrate: string;
  averageScore: string;
  prediction: string;
} {
  let wins = 0;
  let draws = 0;
  let losses = 0;

  fixtures?.forEach((fixture) => {
    const homeTeam = fixture.teams.home.name;
    const awayTeam = fixture.teams.away.name;
    const homeWinner = fixture.teams.home.winner;
    const awayWinner = fixture.teams.away.winner;

    if (homeTeam === teamName && homeWinner) {
      wins++;
    } else if (awayTeam === teamName && awayWinner) {
      wins++;
    } else if (homeTeam === teamName && awayWinner) {
      losses++;
    } else if (awayTeam === teamName && homeWinner) {
      losses++;
    } else {
      draws++;
    }
  });

  const winrate = calWinRate({ wins, draws, losses });
  const drawrate = calculateDrawRate({ wins, draws, losses });

  const { averageScore, prediction } = determineUnderOverProbability(
    fixtures,
    teamName,
    3,
  );

  return { wins, draws, losses, winrate, drawrate, averageScore, prediction };
}

function calWinRate(teamStats: {
  wins: number;
  draws: number;
  losses: number;
}): string {
  const totalMatches = teamStats.wins + teamStats.draws + teamStats.losses;
  const winRate = (teamStats.wins / totalMatches) * 100;
  return winRate.toFixed(2);
}

function calculateDrawRate(teamStats: {
  wins: number;
  draws: number;
  losses: number;
}): string {
  const totalMatches = teamStats.wins + teamStats.draws + teamStats.losses;
  const drawRate = (teamStats.draws / totalMatches) * 100;
  return drawRate.toFixed(2);
}

function calculateAverageScores(
  fixtures: PredictResponse[],
  teamName: string,
): number {
  let totalScore = 0;
  let totalMatches = 0;

  fixtures?.forEach((fixture) => {
    if (
      fixture.teams.home.name === teamName ||
      fixture.teams.away.name === teamName
    ) {
      totalScore += fixture.goals.home + fixture.goals.away;
      totalMatches++;
    }
  });

  const averageScore = totalScore / totalMatches;
  return averageScore;
}

function determineUnderOverProbability(
  fixtures: PredictResponse[],
  teamName: string,
  threshold: number,
): {
  averageScore: string;
  prediction: string;
} {
  const averageScore = calculateAverageScores(fixtures, teamName);

  let prediction: string;

  if (averageScore >= threshold) {
    prediction = "Over";
  } else {
    prediction = "Under";
  }

  return { averageScore: averageScore.toFixed(2), prediction };
}
