import { create } from "zustand";
import { Sport } from "../types";

interface AuthState {
  step: 1 | 2 | 3;
  userInfo: {} | null;
  sports: Sport[];
  setSports: (sport: Sport) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  step: 1,
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
}));
