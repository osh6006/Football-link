import clsx from "clsx";
import Loading from "components/common/loading";
import { useLiveMathesQuery } from "hooks/services/quries/use-football-query";
import * as React from "react";
import useLeagueStore from "stores/league-store";
import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IHomeLiveTableProps {}

const HomeLiveTable: React.FunctionComponent<IHomeLiveTableProps> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();

  const {
    data: liveMatch,
    isLoading,
    isError,
    error,
  } = useLiveMathesQuery(selectedLeague?.rapid_football_league_id!);

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "h flex min-h-[260px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
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
          "h flex min-h-[260px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        {error.message}
      </div>
    );
  }

  if (!liveMatch) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "h relative flex min-h-[260px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        There are no matches in progress 🤔
      </div>
    );
  }

  return (
    <div
      className={clsx(
        `relative rounded-md p-2 shadow-md`,
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
          <img
            src={liveMatch?.teams.home.logo}
            alt="home"
            className="rounded-full"
          />
          <p>{liveMatch?.teams.home.name}</p>
        </div>
        <span className="text-3xl">vs</span>

        {/* away */}
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img
            src={liveMatch?.teams.away.logo}
            alt="away"
            className="rounded-full"
          />
          <p>{liveMatch?.teams.away.name}</p>
        </div>
      </div>
      <p className="text-center">{`${liveMatch?.fixture.venue.name} / ${liveMatch?.fixture.venue.city}`}</p>
    </div>
  );
};

export default HomeLiveTable;
