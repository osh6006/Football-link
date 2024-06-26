import clsx from "clsx";
import { componentBackgroundChange } from "utils/util";

import HomeSkeleton from "./home-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";
import { useLeagueStore } from "stores/league-store";
import { useLiveMathesQuery } from "hooks/tanstack-query/use-live-query";

import "react-lazy-load-image-component/src/effects/opacity.css";
import Title from "./title";
import MoreArrow from "components/common/more-arrow";

interface IHomeLiveTableProps {}

const HomeLiveTable: React.FunctionComponent<IHomeLiveTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const {
    data: liveMatch,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useLiveMathesQuery(selectedLeague?.leagueId!);

  return (
    <div className="flex-1 space-y-2">
      <Title>
        Live Match
        <MoreArrow path="/live" />
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
            className={componentBackgroundChange(
              theme,
              "flex min-h-[290px] w-full items-center justify-center rounded-md p-2 text-xl font-bold shadow-md sm:min-w-[500px]",
            )}
          >
            {error?.message || "Something Error"}
          </div>
        ) : null}

        {isSuccess && liveMatch.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center p-2 text-xl font-bold">
            There are no matches in progress 🤔
          </div>
        ) : null}

        {isSuccess && liveMatch.length !== 0 ? (
          <>
            -
            <div className="flex w-fit select-none items-center gap-x-2 rounded-md px-2 py-1 uppercase shadow-md">
              <p className="text-lg font-bold">live</p>
              <div className="bggreen-500 h-3 w-3 rounded-full"></div>
            </div>
            <div
              className={clsx(
                `flex min-h-[200px] w-full items-center justify-around rounded-md border-MediumGrey text-MediumGrey`,
              )}
            >
              {/* home */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <LazyLoadImage
                  effect="opacity"
                  src={liveMatch ? liveMatch[0]?.teams.home.logo : ""}
                  alt="home"
                  className="aspect-square w-32 rounded-full sm:w-40"
                />
                <p>{liveMatch ? liveMatch[0]?.teams.home.name : "unknown"}</p>
              </div>
              <span className="text-3xl">vs</span>

              {/* away */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <LazyLoadImage
                  effect="opacity"
                  src={liveMatch ? liveMatch[0]?.teams.away.logo : ""}
                  alt="away"
                  className="aspect-square w-32 rounded-full sm:w-40"
                />
                <p>{liveMatch ? liveMatch[0]?.teams.away.name : "unknown"}</p>
              </div>
            </div>
            <p className="text-center">{`${
              liveMatch ? liveMatch[0]?.fixture.venue.name : "unknown"
            } / ${
              liveMatch ? liveMatch[0]?.fixture.venue.city : "unknown"
            }`}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HomeLiveTable;
