import clsx from "clsx";
import Loading from "components/common/loading";
import dayjs from "dayjs";
import { useNextMatchQuery } from "hooks/services/quries/use-football-query";
import useLeagueStore from "stores/league-store";
import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IHomeNextTableProps {}

const HomeNextTable: React.FunctionComponent<IHomeNextTableProps> = (props) => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();

  const {
    data: nextMatch,
    isLoading,
    isError,
  } = useNextMatchQuery(selectedLeague?.rapid_football_league_id!);

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
        There's been an error on the server 🤮
      </div>
    );
  }

  return (
    <div
      className={clsx(
        `relative rounded-md p-4
         shadow-md`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
      <time className="text-lg">
        {dayjs(nextMatch?.fixture.date).format("YYYY MM DD HH:MM")}
      </time>
      <div
        className={clsx(
          `flex min-h-[200px] w-full items-center justify-around rounded-md border-MediumGrey text-MediumGrey`,
        )}
      >
        {/* home */}
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img src={nextMatch?.teams.home.logo} alt="home" className="" />
          <p>{nextMatch?.teams.home.name}</p>
        </div>
        <span className="text-3xl">vs</span>

        {/* away */}
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img src={nextMatch?.teams.away.logo} alt="away" className="" />
          <p>{nextMatch?.teams.away.name}</p>
        </div>
      </div>
      <p className="text-center">{`${nextMatch?.fixture.venue.name} / ${nextMatch?.fixture.venue.city}`}</p>
    </div>
  );
};

export default HomeNextTable;
