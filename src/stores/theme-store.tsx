import { ThemeColor } from "types";
import { create } from "zustand";

interface IThemeStore {
  theme: ThemeColor;
  setTheme: (mode: ThemeColor) => void;
}

export const useThemeStore = create<IThemeStore>()((set) => ({
  theme: (localStorage.getItem("theme") as ThemeColor) || "light",
  setTheme: (mode: ThemeColor) =>
    set(() => {
      localStorage.setItem("theme", mode);
      return { theme: mode };
    }),
}));

export default useThemeStore;
