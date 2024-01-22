import { ISport } from "types";
import { create } from "zustand";

interface ISportsStore {
  sports: ISport[];
  selectedSport: ISport | null;
  setSports: (sports: ISport[]) => void;
  selectSport: (sports: ISport) => void;
}

export const useSportStore = create<ISportsStore>()((set) => ({
  sports: [],
  selectedSport: null,
  setSports: (sports: ISport[]) =>
    set(() => {
      return { sports };
    }),
  selectSport: (sport: ISport) =>
    set(() => {
      return { selectedSport: sport };
    }),
}));

export default useSportStore;
