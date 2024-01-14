import { create } from "zustand";
import { InsertSports } from "../types";

interface IAuthStepState {
  step: number;
  minStep: number;
  maxStep: number;
  sports: InsertSports[];

  setSports: (sport: InsertSports) => void;
  setStep: (select: number) => void;
}

export const useAuthStepStore = create<IAuthStepState>()((set) => ({
  step: 1,
  minStep: 1,
  maxStep: 3,
  sports: [],

  setSports: (sport: InsertSports) =>
    set((state) => {
      const findIdx = state.sports.findIndex((el) => el.value === sport.value);
      if (findIdx !== -1) {
        return {
          sports: state.sports.filter((el) => el.value !== sport.value),
        };
      } else {
        return { sports: [...state.sports, sport] };
      }
    }),

  setStep: (selectStep) =>
    set((state) => {
      return { step: selectStep };
    }),
}));
