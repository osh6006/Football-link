import { create } from "zustand";
import { Sport } from "../types";

interface AuthState {
  step: number;
  minStep: 1;
  maxStep: 3;
  userInfo: {} | null;
  sports: Sport[];
  setSports: (sport: Sport) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  step: 1,
  minStep: 1,
  maxStep: 3,
  userInfo: null,
  sports: [],
  setSports: (sport: Sport) =>
    set((state) => {
      const findIdx = state.sports.findIndex((el) => el.id === sport.id);
      if (findIdx !== -1) {
        return { sports: state.sports.filter((el) => el.id !== sport.id) };
      } else {
        return { sports: [...state.sports, sport] };
      }
    }),
  prevStep: () =>
    set((state) => {
      if (state.step === state.minStep) {
        return { step: 1 };
      }
      return { step: state.step - 1 };
    }),
  nextStep: () =>
    set((state) => {
      if (state.step === state.maxStep) {
        return { step: 3 };
      }
      return { step: state.step + 1 };
    }),
}));
