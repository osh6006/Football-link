import clsx from "clsx";
import { componentBackgroundChange } from "utils/util";

import Loading from "components/common/loading";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";

import "react-lazy-load-image-component/src/effects/opacity.css";
import { useLeagueStore } from "stores/league-store";
import { useLiveMathesQuery } from "hooks/services/quries/use-live-query";

interface IHomeLiveTableProps {}

const HomeLiveTable: React.FunctionComponent<IHomeLiveTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const {
    data: liveMatch,
    isLoading,
    isError,
    error,
  } = useLiveMathesQuery(selectedLeague?.leagueId!);

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[290px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md sm:min-w-[500px]",
        )}
      >
        <Loading size="md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[290px] w-full min-w-[500px] items-center justify-center rounded-md p-2 text-xl font-bold shadow-md",
        )}
      >
        {error.message}
      </div>
    );
  }

  if (liveMatch && liveMatch.length === 0) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "relative flex min-h-[285px] w-full items-center justify-center rounded-md p-2 text-center text-xl font-bold shadow-md",
        )}
      >
        There are no matches in progress 🤔
      </div>
    );
  }

  return (
    <div
      className={clsx(
        `relative min-h-[285px] rounded-md p-2 shadow-md`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
      <div className="flex w-fit select-none items-center gap-x-2 rounded-md px-2 py-1 uppercase shadow-md">
        <p className="text-lg font-bold">live</p>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
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
            className="rounded-full"
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
            className="rounded-full"
          />
          <p>{liveMatch ? liveMatch[0]?.teams.away.name : "unknown"}</p>
        </div>
      </div>
      <p className="text-center">{`${
        liveMatch ? liveMatch[0]?.fixture.venue.name : "unknown"
      } / ${liveMatch ? liveMatch[0]?.fixture.venue.city : "unknown"}`}</p>
    </div>
  );
};

export default HomeLiveTable;
