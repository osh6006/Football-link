import { ThemeColor } from "types";
import { SelectorHook, createStore } from "./root-store";

interface IThemeState {
  theme: ThemeColor;
  setTheme: (mode: ThemeColor) => void;
}

const useThemeStore = createStore<IThemeState>((set) => ({
  theme: (localStorage.getItem("theme") as ThemeColor) || "light",
  setTheme: (mode: ThemeColor) =>
    set(() => {
      localStorage.setItem("theme", mode);
      return { theme: mode };
    }),
}));

export const useTheme: SelectorHook<IThemeState, "theme"> = (
  selector = (state: IThemeState) => state.theme,
) => useThemeStore(selector);

export const useThemeActions = () => useThemeStore((state) => state.setTheme);
