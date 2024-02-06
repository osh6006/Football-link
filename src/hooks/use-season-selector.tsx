import { useState } from "react";

export default function useSeasonSelector() {
  const [season, setSeason] = useState(new Date().getFullYear() - 1);

  const handleSeasonIncrese = () => {
    if (new Date().getFullYear() - 1 === season) {
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
