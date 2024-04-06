import clsx from "clsx";
import dayjs from "dayjs";

import useScheduleStore from "stores/schedule-store";

import Carousel from "react-multi-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ArrowFix } from "components/common/util";

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

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 20,
    },
    laptop: {
      breakpoint: {
        max: 1500,
        min: 1024,
      },
      items: 15,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 500,
      },
      items: 10,
    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0,
      },
      items: 5,
    },
  };

  return (
    <div className="sticky top-[110px] z-30 flex items-center justify-center gap-x-6 bg-inherit sm:top-[125px]">
      <ul className="flex w-full items-center justify-between overflow-hidden ">
        <Carousel
          arrows
          infinite
          rtl={false}
          itemClass=""
          dotListClass=""
          showDots={false}
          autoPlay={false}
          slidesToSlide={5}
          draggable={false}
          centerMode={true}
          focusOnSelect={true}
          minimumTouchDrag={2}
          responsive={responsive}
          additionalTransfrom={10}
          containerClass="container"
          customLeftArrow={
            <ArrowFix className="absolute left-4 cursor-pointer rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/80">
              <ChevronLeftIcon />
            </ArrowFix>
          }
          customRightArrow={
            <ArrowFix className="absolute right-4 cursor-pointer rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/80">
              <ChevronRightIcon />
            </ArrowFix>
          }
        >
          <div
            role="button"
            className={clsx(
              " mx-auto flex flex-col  items-center justify-center rounded-md border px-3 py-4 font-semibold transition-colors hover:border-Main hover:bg-Main hover:text-White",
              isAll
                ? " border-2 border-Main bg-Main font-semibold text-White"
                : "border-MediumGrey",
            )}
            onClick={() => {
              setIsAll(true);
            }}
          >
            <p>전</p>
            <p>체</p>
          </div>
          {dayList?.map((el, i) => (
            <div
              key={el.numberOfDay}
              role="button"
              className={clsx(
                "mx-1 flex flex-col  items-center justify-center rounded-md border px-3 py-4 font-semibold transition-colors  hover:border-Main hover:bg-Main hover:text-White",
                !isAll && el.isActive
                  ? " border-2 border-Main bg-Main font-semibold text-White"
                  : "border-MediumGrey ",
                el.numberOfDay === dayjs(new Date()).date()
                  ? "border-2 border-green-500 font-semibold text-green-500 hover:border-green-500 hover:bg-green-500 hover:text-White"
                  : "",
              )}
              onClick={(e) => {
                e.stopPropagation();
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
            </div>
          ))}
        </Carousel>
      </ul>
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
