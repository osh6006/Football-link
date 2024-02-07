import { ButtonHTMLAttributes } from "react";
import { NavigateAction, ToolbarProps, View } from "react-big-calendar";

import clsx from "clsx";

import useOutsideClick from "hooks/use-outside-click";

import { CSSTransition } from "react-transition-group";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

interface ICalendarToolbarProps {
  label: string;
  date: Date;
  initDate: () => void;
  controlDate: (action: string, type: View) => void;
  onView: (view: View) => void;
  props: ToolbarProps;
}

interface ICalendarToolBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  view?: string;
}

const CalendarToolBtn: React.FC<ICalendarToolBtn> = ({
  view,
  name,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `select-none rounded-md border border-MediumGrey px-3 py-2 transition-all hover:bg-Main hover:text-White
      focus:outline-none focus:ring-2 focus:ring-Main active:scale-95`,
        view === name && name !== undefined && "bg-Main text-White",
      )}
    >
      {children}
    </button>
  );
};

const CalendarToolbar: React.FunctionComponent<ICalendarToolbarProps> = ({
  date,
  label,
  onView,
  initDate,
  controlDate,
  props,
}) => {
  const handleChangeView = (view: View) => {
    onView(view);
  };

  const handleNavigate = (action: NavigateAction | string, type: View) => {
    controlDate(action, type);
  };

  const { isOpen, setIsOpen, ref, nodeRef } = useOutsideClick();
  const thisYear = new Date().getFullYear() - 1;
  const firtYear = 2009;
  const selecte_years = Array.from(
    { length: thisYear - firtYear + 2 },
    (_, index) => firtYear + index,
  );

  return (
    <div className="flex flex-col items-center justify-between gap-y-2 py-3 sm:flex-row">
      <div className="flex gap-x-2">
        <CalendarToolBtn
          type="button"
          view={props.view}
          onClick={() => handleNavigate("TODAY", props.view)}
        >
          Today
        </CalendarToolBtn>
        <CalendarToolBtn
          type="button"
          onClick={() => handleNavigate("PREV", props.view)}
        >
          <ChevronLeft />
        </CalendarToolBtn>
        <CalendarToolBtn
          type="button"
          onClick={() => handleNavigate("NEXT", props.view)}
        >
          <ChevronRight />
        </CalendarToolBtn>
      </div>
      <span className="text-2xl font-semibold text-Main">
        <div
          role="button"
          ref={ref}
          className="relative flex select-none items-center gap-x-3 rounded-md border-2 border-transparent px-2 py-1 text-2xl shadow-md transition-colors
       hover:border-Main hover:text-Main "
          onClick={(e) => {
            setIsOpen(!isOpen);
          }}
        >
          <Calendar />
          <p>{`${date}`}</p>
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
              {selecte_years.map((el) => (
                <li
                  key={el}
                  role="gridcell"
                  className="flex select-none items-center justify-center rounded-md border px-3  py-1
              text-lg transition-colors hover:text-Main
              "
                  onClick={() => {
                    handleNavigate(
                      `${el}-${dayjs(date).month() + 1}-${dayjs(date).date()}`,
                      "agenda",
                    );
                    setIsOpen(!isOpen);
                  }}
                >
                  {el}
                </li>
              ))}
            </ul>
          </CSSTransition>
        </div>
      </span>
      <div className="flex gap-x-2">
        <CalendarToolBtn
          view={props.view}
          name={"month"}
          onClick={() => handleChangeView("month")}
        >
          Month
        </CalendarToolBtn>
        <CalendarToolBtn
          view={props.view}
          name={"week"}
          onClick={() => handleChangeView("week")}
        >
          Week
        </CalendarToolBtn>
        <CalendarToolBtn
          view={props.view}
          name={"day"}
          onClick={() => handleChangeView("day")}
        >
          Day
        </CalendarToolBtn>
        <CalendarToolBtn
          view={props.view}
          name={"agenda"}
          onClick={() => handleChangeView("agenda")}
        >
          Agenda
        </CalendarToolBtn>
      </div>
    </div>
  );
};

export default CalendarToolbar;
