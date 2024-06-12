import clsx from "clsx";
import dayjs from "dayjs";

import HomeSkeleton from "./home-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";
import { useLeagueStore } from "stores/league-store";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useNextMatchQuery } from "hooks/tanstack-query/use-schedule-query";
import Title from "./title";
import MoreArrow from "components/common/more-arrow";

interface IHomeNextTableProps {}

const HomeNextTable: React.FunctionComponent<IHomeNextTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const {
    data: nextMatch,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useNextMatchQuery(selectedLeague?.leagueId!);

  return (
    <div className="mt-2 flex-1 space-y-2 sm:mt-0">
      <Title>
        Next Match
        <MoreArrow path="/schedule" />
      </Title>
      <div
        className={clsx(
          `relative h-[285px] w-full rounded-md p-2 shadow-md sm:min-w-[500px]`,
          theme === "light" ? "bg-White " : "bg-DarkGrey ",
        )}
      >
        {isLoading ? <HomeSkeleton /> : null}
        {isError ? (
          <div
            className={
              "flex min-h-[290px] w-full items-center justify-center rounded-md p-2 text-xl font-bold sm:min-w-[500px]"
            }
          >
            {error?.message || "Something Error"}
          </div>
        ) : null}
        {isSuccess && !nextMatch ? (
          <div className="flex h-full w-full items-center justify-center p-2 text-xl font-bold">
            There are not next matches 🤔
          </div>
        ) : null}
        {isSuccess && nextMatch ? (
          <>
            <time className="text-lg">
              {dayjs(nextMatch?.fixture.date).format("YYYY-MM-DD HH:mm")}
            </time>
            <div
              className={clsx(
                `flex min-h-[200px] w-full items-center justify-around rounded-md border-MediumGrey text-MediumGrey`,
              )}
            >
              {/* home */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <LazyLoadImage
                  effect="opacity"
                  src={nextMatch?.teams.home.logo}
                  alt="home"
                  className="aspect-square w-32 sm:w-40"
                />
                <h2 className="text-center font-bold sm:text-lg">
                  {nextMatch?.teams.home.name}
                </h2>
              </div>
              <span className="text-lg sm:text-3xl">vs</span>

              {/* away */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <LazyLoadImage
                  effect="opacity"
                  src={nextMatch?.teams.away.logo}
                  alt="away"
                  className="aspect-square w-32 sm:w-40"
                />
                <h1 className="text-center font-bold sm:text-lg">
                  {nextMatch?.teams.away.name}
                </h1>
              </div>
            </div>
            <p className="text-center font-bold sm:text-lg">{`${nextMatch?.fixture.venue.name} / ${nextMatch?.fixture.venue.city}`}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HomeNextTable;
