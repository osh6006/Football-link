import { create } from "zustand";

interface IAuthState {
  userInfo: any | null;
  setUserInfo: (user: any) => void;
}

export const useAuthStore = create<IAuthState>()((set) => ({
  userInfo: true,
  setUserInfo: (user) => () =>
    set((state) => {
      return { userInfo: state.userInfo };
    }),
}));
