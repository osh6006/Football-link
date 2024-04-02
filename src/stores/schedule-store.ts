import dayjs from "dayjs";
import { create } from "zustand";

interface IScheduleStoreState {
  currentDate: string;
  controlDate: (action: string, type: string) => void;
  initDate: () => void;
}

export const useScheduleStore = create<IScheduleStoreState>()((set) => ({
  currentDate: dayjs().format("YYYY-MM-DD"),
  controlDate: (action, type) =>
    set(({ currentDate }) => {
      switch (action) {
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
}));

export default useScheduleStore;
