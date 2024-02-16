import clsx from "clsx";
import dayjs from "dayjs";

import useScheduleStore from "stores/schedule-store";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useHorizontalScroll from "hooks/use-horizontal-scroll";

interface IDaySelectorProps {
  isAll: boolean;
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const DaySelector: React.FunctionComponent<IDaySelectorProps> = ({
  isAll,
  setIsAll,
}) => {
  const { currentDate: selectedDate, controlDate } = useScheduleStore();
  const dayList = getAllDatesInMonth(selectedDate, selectedDate);
  const { containerRef, handleScroll, handleItemClick } =
    useHorizontalScroll(150);

  return (
    <div className="flex items-center justify-center gap-x-6">
      <button onClick={() => handleScroll("left")}>
        <ChevronLeft />
      </button>
      <ul
        ref={containerRef}
        className="flex items-center justify-between gap-x-6 overflow-hidden"
      >
        <li
          role="button"
          className={clsx(
            " flex flex-col items-center justify-center rounded-md border px-3 py-2 font-semibold transition-colors hover:border-Main  hover:text-Main",
            isAll
              ? " border-2 border-Main font-semibold text-Main"
              : "border-MediumGrey",
          )}
          onClick={() => {
            setIsAll(true);
          }}
        >
          <p>전</p>
          <p>체</p>
        </li>
        {dayList.map((el, i) => (
          <li
            key={el.numberOfDay}
            role="button"
            className={clsx(
              "flex flex-col items-center justify-center rounded-md border  px-3 py-2 font-semibold transition-colors hover:border-Main  hover:text-Main",
              !isAll && el.isActive
                ? " border-2 border-Main font-semibold text-Main"
                : "border-MediumGrey",
              el.numberOfDay === dayjs(new Date()).date()
                ? "border-2 border-green-500 font-semibold text-green-500"
                : "",
            )}
            onClick={() => {
              handleItemClick(i);
              controlDate(
                "CUSTOM",
                `${dayjs(selectedDate).year()}-${
                  dayjs(selectedDate).month() + 1
                }-${el.numberOfDay}`,
              );
              setIsAll(false);
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
  datesArray.push({
    stringOfDay: dayjs(currentDate).locale("ko").format("dd"),
    numberOfDay: dayjs(currentDate).locale("ko").date(),
    isActive: currentDate === selectedDate,
  });

  return datesArray;
}