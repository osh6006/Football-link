import TeamRank from "components/rank/team-rank";
import PlayerRank from "components/rank/player-rank";
import RankContainer from "components/layouts/rank-container";
import SeasonSelector from "components/common/season-selector";
import PlayerTeamSwitcher from "components/rank/player-team-switcher";

import { useState } from "react";
import { useLeagueStore } from "stores/league-store";
import useSeasonSelector from "hooks/use-season-selector";

interface IRankPageProps {}

const RankPage: React.FunctionComponent<IRankPageProps> = () => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const { season, handleSeasonDecrese, handleSeasonIncrese, handleSetSeason } =
    useSeasonSelector();
  const [selectedTarget, setSelectedTarget] = useState<"team" | "player">(
    "team",
  );

  const handleTargetChange = (target: "team" | "player") => {
    setSelectedTarget(target);
  };

  return (
    <RankContainer>
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

        <div className="overflow-x-auto pb-10 sm:mt-4 lg:mt-10">
          {selectedTarget === "team" && (
            <TeamRank
              league={selectedLeague?.leagueId + ""}
              season={season + ""}
            />
          )}

          {selectedTarget === "player" && (
            <PlayerRank
              season={season + ""}
              league={selectedLeague?.leagueId!}
            />
          )}
        </div>
      </section>
    </RankContainer>
  );
};

export default RankPage;
