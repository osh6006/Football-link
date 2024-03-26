import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

interface IPlayerTeamSwitcherProps {}

const PlayerTeamSwitcher: React.FunctionComponent<
  IPlayerTeamSwitcherProps
> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabName = searchParams.get("tab") || "team";

  return (
    <div className="rounded-md">
      <button
        className={clsx(
          "w-28 rounded-l-md py-2",
          tabName === "team"
            ? " border-2 border-Main font-semibold text-Main"
            : "border border-r-0 border-MediumGrey ",
        )}
        onClick={() => setSearchParams(`?tab=team`)}
      >
        Team
      </button>
      <button
        className={clsx(
          "w-28 rounded-r-md py-2",
          tabName === "player"
            ? "  border-2 border-Main font-semibold text-Main"
            : "ron border border-l-0 border-MediumGrey",
        )}
        onClick={() => setSearchParams(`?tab=player`)}
      >
        Player
      </button>
    </div>
  );
};

export default PlayerTeamSwitcher;
