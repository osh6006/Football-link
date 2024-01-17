import { create } from "zustand";
import { InsertSports, Sports } from "../types";

interface ISportsStore {
  sports: InsertSports[];
  selectedSport: Sports | null;
  setSports: (sports: InsertSports[]) => void;
  selectSport: (sports: InsertSports) => void;
}

export const useSportStore = create<ISportsStore>()((set) => ({
  sports: [],
  selectedSport: null,
  setSports: (sports: InsertSports[]) =>
    set(() => {
      return { sports };
    }),
  selectSport: (sport: Sports) =>
    set(() => {
      return { selectedSport: sport };
    }),
}));

export default useSportStore;
