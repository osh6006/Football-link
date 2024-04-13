import dayjs from "dayjs";
import { DateRange } from "react-day-picker";
import { ILeagueSeason } from "types";
import { create } from "zustand";

interface IScheduleStoreState {
  currentDate: string;
  currentRange: DateRange | undefined;
  currentSeason: null | ILeagueSeason;
  controlDate: (action: string, type: string) => void;
  initDate: () => void;
  setSeason: (season: ILeagueSeason | null) => void;
  setDateRange: (range: DateRange | undefined) => void;
}

export const useScheduleStore = create<IScheduleStoreState>()((set) => ({
  currentDate: dayjs().format("YYYY-MM-DD"),
  currentSeason: null,
  currentRange: undefined,
  controlDate: (action, type) =>
    set(({ currentDate }) => {
      switch (action) {
        case "TODAY":
          return {
            currentDate: dayjs(new Date()).format("YYYY-MM-DD"),
          };
        case "PREV":
          return {
            currentDate: dayjs(currentDate)
              .subtract(1, "month")
              .format("YYYY-MM-DD"),
          };
        case "NEXT":
          return {
            currentDate: dayjs(currentDate)
              .add(1, "month")
              .format("YYYY-MM-DD"),
          };
        case "CUSTOM":
          return {
            currentDate: dayjs(type).format("YYYY-MM-DD"),
          };
        default:
          return { currentDate: dayjs(action).format("YYYY-MM-DD") };
      }
    }),

  initDate: () =>
    set(() => {
      return { currentDate: dayjs().format("YYYY-MM-DD") };
    }),
  setSeason: (season) =>
    set(() => {
      return { currentSeason: season };
    }),

  setDateRange: (range) =>
    set(() => {
      return { currentRange: range };
    }),
}));

export default useScheduleStore;
