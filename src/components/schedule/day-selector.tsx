import clsx from "clsx";
import dayjs from "dayjs";

import useScheduleStore from "stores/schedule-store";

import Carousel from "react-multi-carousel";

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
    <div className="flex items-center justify-center gap-x-6">
      <ul className="z-10 flex w-full items-center justify-between overflow-hidden">
        <Carousel
          additionalTransfrom={10}
          arrows={true}
          autoPlay={false}
          containerClass="container"
          dotListClass=""
          draggable={false}
          infinite={true}
          itemClass=""
          minimumTouchDrag={2}
          responsive={responsive}
          rtl={false}
          showDots={false}
          slidesToSlide={5}
          centerMode={true}
          focusOnSelect={true}
        >
          <div
            role="button"
            className={clsx(
              " mx-auto flex flex-col  items-center justify-center rounded-md border px-3 py-4 font-semibold transition-colors hover:border-Main  hover:text-Main",
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
          </div>
          {dayList?.map((el, i) => (
            <div
              key={el.numberOfDay}
              role="button"
              className={clsx(
                "mx-1 flex flex-col items-center justify-center rounded-md border px-3 py-4 font-semibold transition-colors hover:border-Main  hover:text-Main",
                !isAll && el.isActive
                  ? " border-2 border-Main font-semibold text-Main"
                  : "border-MediumGrey",
                el.numberOfDay === dayjs(new Date()).date()
                  ? "border-2 border-green-500 font-semibold text-green-500"
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
