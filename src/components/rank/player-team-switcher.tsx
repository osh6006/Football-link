import clsx from "clsx";
import * as React from "react";

interface IPlayerTeamSwitcherProps {
  selectedTarget: "team" | "player";
  setSelectedTarget: (target: "team" | "player") => void;
}

const PlayerTeamSwitcher: React.FunctionComponent<IPlayerTeamSwitcherProps> = ({
  selectedTarget,
  setSelectedTarget,
}) => {
  return (
    <div className="rounded-md">
      <button
        className={clsx(
          "w-28 rounded-l-md py-2",
          selectedTarget === "team"
            ? " border-2 border-Main font-semibold text-Main"
            : "border border-r-0 border-MediumGrey ",
        )}
        onClick={() => setSelectedTarget("team")}
      >
        팀
      </button>
      <button
        className={clsx(
          "w-28 rounded-r-md py-2",
          selectedTarget === "player"
            ? "  border-2 border-Main font-semibold text-Main"
            : "ron border border-l-0 border-MediumGrey",
        )}
        onClick={() => setSelectedTarget("player")}
      >
        선수
      </button>
    </div>
  );
};

export default PlayerTeamSwitcher;
