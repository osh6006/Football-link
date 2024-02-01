import { useState } from "react";
import PlayerTeamSwitcher from "../player-team-switcher";
import SeasonSelector from "../season-selector";
import TeamRankTable from "./team-rank-table";
import useLeagueStore from "stores/league-store";

interface IFootballRankContentProps {}

const RankContent: React.FunctionComponent<IFootballRankContentProps> = () => {
  const { selectedLeague } = useLeagueStore();
  const [season, setSeason] = useState(new Date().getFullYear() - 1);
  const [selectedTarget, setSelectedTarget] = useState<"team" | "player">(
    "team",
  );

  const handleTargetChange = (target: "team" | "player") => {
    setSelectedTarget(target);
  };

  const handleSeasonIncrese = () => {
    if (new Date().getFullYear() - 1 === season) {
      return;
    }
    setSeason(season + 1);
  };
  const handleSeasonDecrese = () => {
    setSeason(season - 1);
  };
  const handleSetSeason = (season: number) => {
    setSeason(season);
  };

  return (
    <section>
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

      <div className="mt-10 overflow-x-auto">
        <TeamRankTable
          league={selectedLeague?.rapid_football_league_id + ""}
          season={season + ""}
        />
      </div>
    </section>
  );
};

export default RankContent;
