import clsx from "clsx";
import dayjs from "dayjs";
import Loading from "components/common/loading";
import { componentBackgroundChange } from "utils/util";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";

import "react-lazy-load-image-component/src/effects/opacity.css";
import { useNextMatchQuery } from "hooks/services/quries/use-schedule-query";
import { useLeagueStore } from "stores/league-store";

interface IHomeNextTableProps {}

const HomeNextTable: React.FunctionComponent<IHomeNextTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const {
    data: nextMatch,
    isLoading,
    isError,
  } = useNextMatchQuery(selectedLeague?.leagueId!);

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "h flex min-h-[285px] w-full min-w-[500px] items-center justify-center rounded-md p-2 text-xl shadow-md",
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
          "h flex min-h-[285px] w-full min-w-[500px] items-center justify-center rounded-md p-2 text-xl font-bold shadow-md",
        )}
      >
        There's been an error on the server 🤮
      </div>
    );
  }

  return (
    <div
      className={clsx(
        `relative min-h-[285px] rounded-md p-4
         shadow-md`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
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
            className="w-32 sm:w-40"
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
            className="w-32 sm:w-40"
          />
          <h1 className="text-center font-bold sm:text-lg">
            {nextMatch?.teams.away.name}
          </h1>
        </div>
      </div>
      <p className="text-center font-bold sm:text-lg">{`${nextMatch?.fixture.venue.name} / ${nextMatch?.fixture.venue.city}`}</p>
    </div>
  );
};

export default HomeNextTable;
