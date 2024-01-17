import { create } from "zustand";
import { InsertSports } from "../types";

interface ISportsStore {
  sports: InsertSports[];
  selectedSport: InsertSports | null;
  setSports: (sports: InsertSports[]) => void;
  selectSport: (sports: InsertSports) => void;
}

export const useThemeStore = create<ISportsStore>()((set) => ({
  sports: [],
  selectedSport: null,
  setSports: (sports: InsertSports[]) =>
    set(() => {
      return { sports };
    }),
  selectSport: (sport: InsertSports) =>
    set(() => {
      return { selectedSport: sport };
    }),
}));

export default useThemeStore;
