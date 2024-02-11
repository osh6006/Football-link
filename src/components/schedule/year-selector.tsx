import clsx from "clsx";
import dayjs from "dayjs";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import useScheduleStore from "stores/schedule-store";

import { CSSTransition } from "react-transition-group";
import useOutsideClick from "hooks/use-outside-click";

interface IYearSelectorProps {
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const YearSelector: React.FunctionComponent<IYearSelectorProps> = ({
  setIsAll,
}) => {
  const { currentDate, controlDate } = useScheduleStore();
  const isToday =
    currentDate === dayjs(new Date()).locale("ko").format("YYYY-MM-DD");
  const { isOpen, setIsOpen, ref, nodeRef } = useOutsideClick();

  const thisYear = new Date().getFullYear() - 1;
  const firtYear = 2009;
  const years = Array.from(
    { length: thisYear - firtYear + 2 },
    (_, index) => firtYear + index,
  );

  return (
    <div className="mb-5 flex items-center justify-center ">
      <button
        className={clsx(
          "mr-4 mt-2 rounded-xl border px-2 text-sm",
          isToday && "bg-Main text-white",
        )}
        onClick={() => {
          controlDate("TODAY", "asdf");
          setIsAll(false);
        }}
      >
        오늘
      </button>
      <div className="flex items-center gap-x-4">
        <button
          className="mt-1 hover:text-Main"
          onClick={() => controlDate("PREV", "month")}
        >
          <ChevronLeftIcon size={25} />
        </button>
        <h2 className="text-3xl font-semibold text-Main">{currentDate}</h2>
        <button
          className="mt-1 hover:text-Main"
          onClick={() => controlDate("NEXT", "month")}
        >
          <ChevronRightIcon size={25} />
        </button>
      </div>
      <div className="relative" ref={ref}>
        <button
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
          className="ml-2 mt-2 hover:text-Main "
        >
          <CalendarIcon size={25} />
        </button>
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={100}
          classNames={"select-season"}
          unmountOnExit
        >
          <ul
            ref={nodeRef}
            role="grid"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={clsx(
              `absolute left-[50%] top-[30px] z-10 mt-4 grid w-[300px] -translate-x-[50%] grid-cols-3  items-center justify-center gap-2 overflow-hidden rounded-md bg-white
            p-2 text-DarkGrey shadow-lg focus:outline-none sm:text-sm md:w-[380px]`,
            )}
          >
            {years.map((el) => (
              <li
                key={el}
                role="gridcell"
                className="flex select-none items-center justify-center rounded-md border px-3  py-1
              text-lg transition-colors hover:text-Main
              "
                onClick={() => {
                  setIsOpen(!isOpen);
                  controlDate(
                    "CUSTOM",
                    `${el}-${dayjs(currentDate).month() + 1}-${dayjs(
                      currentDate,
                    ).date()}`,
                  );
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </CSSTransition>
      </div>
    </div>
  );
};

export default YearSelector;
