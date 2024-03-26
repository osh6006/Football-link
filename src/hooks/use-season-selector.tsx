import { useState } from "react";
import { useLeagueStore } from "stores/league-store";

export default function useSeasonSelector() {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const [season, setSeason] = useState(
    Number(selectedLeague?.season) || new Date().getFullYear() - 1,
  );

  const handleSeasonIncrese = () => {
    if (new Date().getFullYear() === season) {
      return;
    }
    setSeason(season + 1);
  };
  const handleSeasonDecrese = () => {
    if (2008 === season) {
      return;
    }
    setSeason(season - 1);
  };
  const handleSetSeason = (season: number) => {
    setSeason(season);
  };

  return {
    season,
    setSeason,
    handleSeasonDecrese,
    handleSeasonIncrese,
    handleSetSeason,
  };
}
