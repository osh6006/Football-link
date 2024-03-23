import { create } from "zustand";
import { SelectorHook } from "./root-store";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ICountry {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

interface ISelectCounrtyState {
  selectCountry: ICountry | null;
  actions: {
    selectCountry: (country: ICountry) => void;
  };
}

export const useCountryStore = create<ISelectCounrtyState>()(
  immer(
    persist<ISelectCounrtyState>(
      (set) => {
        return {
          selectCountry: null,
          actions: {
            selectCountry: (country) => {
              set({ selectCountry: country });
            },
          },
        };
      },
      { name: "country-storage" },
    ),
  ),
);

export const useCountryStores: SelectorHook<
  ISelectCounrtyState,
  "selectCountry"
> = (selector = (state: ISelectCounrtyState) => state.selectCountry) =>
  useCountryStore(selector);

export const useModalActions = () =>
  useCountryStore((state) => state.selectCountry);
