import dayjs from "dayjs";

import { DateRange } from "react-day-picker";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { ILeagueSeason } from "types";
import { create } from "zustand";

interface ITeamScheduleStoreState {
  currentRange: DateRange | undefined;
  currentSeason: null | ILeagueSeason;
  setSeason: (season: ILeagueSeason | null) => void;
  setDateRange: (range: DateRange | undefined) => void;
}

export const useTeamScheduleStore = create<ITeamScheduleStoreState>()(
  persist(
    immer<ITeamScheduleStoreState>((set) => ({
      currentDate: dayjs().format("YYYY-MM-DD"),
      currentSeason: null,
      currentRange: undefined,

      setSeason: (season) =>
        set(() => {
          return { currentSeason: season };
        }),

      setDateRange: (range) =>
        set(() => {
          return { currentRange: range };
        }),
    })),
    {
      name: "team-schedule-store",
    },
  ),
);

export default useTeamScheduleStore;
