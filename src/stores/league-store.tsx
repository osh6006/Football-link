import { ISupabaseLeague } from "types/football/league";
import { create } from "zustand";

interface ILeagueState {
  leagues: ISupabaseLeague[];
  selectedLeague: ISupabaseLeague | null;
  setLeagues: (sports: ISupabaseLeague[]) => void;
  selectLeague: (sports: ISupabaseLeague) => void;
  clearLeague: () => void;
}

export const useLeagueStore = create<ILeagueState>()((set) => ({
  leagues: [],
  selectedLeague: null,
  setLeagues: (leagues: ISupabaseLeague[]) =>
    set(() => {
      return { leagues };
    }),
  selectLeague: (league: ISupabaseLeague) =>
    set(() => {
      return { selectedLeague: league };
    }),
  clearLeague: () =>
    set(() => {
      return { selectedLeague: null };
    }),
}));

export default useLeagueStore;
