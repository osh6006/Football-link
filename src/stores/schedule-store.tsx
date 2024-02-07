import dayjs from "dayjs";
import { create } from "zustand";
import { NavigateAction, View } from "react-big-calendar";

interface IScheduleStoreState {
  currentDate: string;
  controlDate: (action: NavigateAction | string, type: View) => void;
  initDate: () => void;
}

export const useScheduleStore = create<IScheduleStoreState>()((set) => ({
  currentDate: dayjs().format("YYYY-MM-DD"),
  controlDate: (action: NavigateAction | string, type) =>
    set(({ currentDate }) => {
      switch (action) {
        case "NEXT":
          if (type === "day") {
            return {
              currentDate: dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD"),
            };
          }
          if (type === "week") {
            return {
              currentDate: dayjs(currentDate)
                .add(1, "week")
                .format("YYYY-MM-DD"),
            };
          }

          if (type === "month") {
            return {
              currentDate: dayjs(currentDate)
                .add(1, "month")
                .format("YYYY-MM-DD"),
            };
          }

          return { currentDate };
        case "PREV":
          if (type === "day") {
            return {
              currentDate: dayjs(currentDate)
                .subtract(1, "day")
                .format("YYYY-MM-DD"),
            };
          }
          if (type === "week") {
            return {
              currentDate: dayjs(currentDate)
                .subtract(1, "week")
                .format("YYYY-MM-DD"),
            };
          }

          if (type === "month") {
            return {
              currentDate: dayjs(currentDate)
                .subtract(1, "month")
                .format("YYYY-MM-DD"),
            };
          }
          return { currentDate };
        case "TODAY":
          return {
            currentDate: dayjs().format("YYYY-MM-DD"),
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
