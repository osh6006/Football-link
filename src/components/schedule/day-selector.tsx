import clsx from "clsx";
import dayjs from "dayjs";

import useScheduleStore from "stores/schedule-store";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useHorizontalScroll from "hooks/use-horizontal-scroll";

interface IDaySelectorProps {}

const DaySelector: React.FunctionComponent<IDaySelectorProps> = () => {
  const { currentDate: selectedDate, controlDate } = useScheduleStore();
  const dayList = getAllDatesInMonth(selectedDate, selectedDate);
  const { containerRef, handleScroll, handleItemClick } =
    useHorizontalScroll(150);

  console.log(selectedDate);

  return (
    <div className="flex items-center justify-center gap-x-6">
      <button onClick={() => handleScroll("left")}>
        <ChevronLeft />
      </button>
      <ul
        ref={containerRef}
        className="flex max-w-4xl items-center justify-between gap-x-6 overflow-hidden"
      >
        {dayList.map((el, i) => (
          <li
            key={el.numberOfDay}
            role="button"
            className={clsx(
              "rou flex flex-col items-center justify-center rounded-md border  px-3 py-2 font-semibold transition-colors hover:border-Main  hover:text-Main",
              el.isActive
                ? " border-2 border-Main font-semibold text-Main"
                : "border-MediumGrey",
            )}
            onClick={() => {
              handleItemClick(i);
              controlDate(
                "CUSTOM",
                `${dayjs(selectedDate).year()}-${
                  dayjs(selectedDate).month() + 1
                }-${el.numberOfDay}`,
              );
            }}
          >
            <p>{el.stringOfDay}</p>
            <p>{el.numberOfDay}</p>
          </li>
        ))}
      </ul>
      <button>
        <ChevronRight onClick={() => handleScroll("right")} />
      </button>
    </div>
  );
};

export default DaySelector;

function getAllDatesInMonth(date: string, selectedDate: string) {
  const firstDay = dayjs(date).startOf("month").format("YYYY-MM-DD");
  const lastDay = dayjs(date).endOf("month").format("YYYY-MM-DD");
  const datesArray = [];

  let currentDate = firstDay;

  while (currentDate !== lastDay) {
    datesArray.push({
      stringOfDay: dayjs(currentDate).locale("ko").format("dd"),
      numberOfDay: dayjs(currentDate).locale("ko").date(),
      isActive: currentDate === selectedDate,
    });

    currentDate = dayjs(currentDate).add(1, "day").format("YYYY-MM-DD");
  }

  return datesArray;
}
