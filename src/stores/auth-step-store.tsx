import { create } from "zustand";
import { ISport } from "../types";

interface IAuthStepState {
  step: number;
  minStep: number;
  maxStep: number;
  sports: ISport[];

  setSports: (sport: ISport) => void;
  setStep: (select: number) => void;
}

export const useAuthStepStore = create<IAuthStepState>()((set) => ({
  step: 1,
  minStep: 1,
  maxStep: 3,
  sports: [],

  setSports: (sport: ISport) =>
    set((state) => {
      const findIdx = state.sports.findIndex((el) => el.id === sport.id);
      if (findIdx !== -1) {
        return {
          sports: state.sports.filter((el) => el.id !== sport.id),
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
