import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface ILeague {
  name: string;
  leagueId: number;
  flag: string;
  season: string | number;
}

interface ISelectCounrtyState {
  selectedLeague: ILeague | null;
  selectLeague: (league: ILeague | null) => void;
}

export const useLeagueStore = create<ISelectCounrtyState>()(
  persist(
    immer<ISelectCounrtyState>((set) => ({
      selectedLeague: null,
      selectLeague: (league) =>
        set((state) => {
          state.selectedLeague = league;
        }),
    })),
    {
      name: "league-storage",
    },
  ),
);
