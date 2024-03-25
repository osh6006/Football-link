import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface ICountry {
  country: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
  flag: string;
}

interface ISelectCounrtyState {
  selectedCountry: ICountry | null;
  selectCountry: (country: ICountry | null) => void;
}

export const useCountryStore = create<ISelectCounrtyState>()(
  persist(
    immer<ISelectCounrtyState>((set) => ({
      selectedCountry: null,
      selectCountry: (country) =>
        set((state) => {
          state.selectedCountry = country;
        }),
    })),
    {
      name: "country-storage",
    },
  ),
);
