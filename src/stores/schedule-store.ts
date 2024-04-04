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
}));

export default useScheduleStore;
