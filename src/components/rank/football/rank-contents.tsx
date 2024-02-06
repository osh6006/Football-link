import { useState } from "react";

import useLeagueStore from "stores/league-store";

import TeamRank from "./team-rank";
import PlayerRank from "./player-rank";
import PlayerTeamSwitcher from "../player-team-switcher";
import SeasonSelector from "../../common/season-selector";
import useSeasonSelector from "hooks/use-season-selector";

interface IFootballRankContentProps {}

const RankContent: React.FunctionComponent<IFootballRankContentProps> = () => {
  const { selectedLeague } = useLeagueStore();
  const { season, handleSeasonDecrese, handleSeasonIncrese, handleSetSeason } =
    useSeasonSelector();
  const [selectedTarget, setSelectedTarget] = useState<"team" | "player">(
    "team",
  );

  const handleTargetChange = (target: "team" | "player") => {
    setSelectedTarget(target);
  };

  return (
    <section className="xl:px-4">
      <div className="relative flex flex-col-reverse items-center justify-center gap-y-4 py-2">
        <div className="md:absolute md:left-0 md:top-0 md:mt-3">
          <PlayerTeamSwitcher
            selectedTarget={selectedTarget}
            setSelectedTarget={handleTargetChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <SeasonSelector
            season={season}
            handleSetSeason={handleSetSeason}
            handleSeasonIncrese={handleSeasonIncrese}
            handleSeasonDecrese={handleSeasonDecrese}
          />
        </div>
      </div>

      <div className="overflow-x-auto sm:mt-4 lg:mt-10">
        {selectedTarget === "team" && (
          <TeamRank
            league={selectedLeague?.rapid_football_league_id + ""}
            season={season + ""}
          />
        )}

        {selectedTarget === "player" && (
          <PlayerRank
            season={season + ""}
            league={selectedLeague?.rapid_football_league_id!}
          />
        )}
      </div>
    </section>
  );
};

export default RankContent;
