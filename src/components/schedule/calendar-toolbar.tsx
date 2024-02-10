import { ButtonHTMLAttributes } from "react";
import { NavigateAction, ToolbarProps, View } from "react-big-calendar";

import clsx from "clsx";

import useOutsideClick from "hooks/use-outside-click";

import { CSSTransition } from "react-transition-group";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import Menu from "components/common/menu";

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
  circle?: boolean;
  outline?: boolean;
}

const CalendarToolBtn: React.FC<ICalendarToolBtn> = ({
  view,
  name,
  children,
  onClick,
  circle,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `select-none transition-all hover:bg-Main hover:text-White
      focus:outline-none focus:ring-2 focus:ring-Main active:scale-95`,
        view === name && name !== undefined && "bg-Main text-White",
        circle ? "aspect-square rounded-full p-2" : "rounded-md px-3 py-2",
        outline ? "border border-MediumGrey" : "border-none",
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
    <div className="mb-3 flex flex-col items-center justify-between gap-y-2 py-3 sm:flex-row">
      <div className="flex gap-x-2">
        <CalendarToolBtn
          type="button"
          onClick={() => handleNavigate("PREV", props.view)}
          circle
          outline
        >
          <ChevronLeft />
        </CalendarToolBtn>
        <CalendarToolBtn
          type="button"
          view={props.view}
          onClick={() => handleNavigate("TODAY", props.view)}
        >
          TODAY
        </CalendarToolBtn>
        <CalendarToolBtn
          type="button"
          onClick={() => handleNavigate("NEXT", props.view)}
          circle
          outline
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
        <Menu className="w-[200px] rounded-md border border-MediumGrey">
          <Menu.MenuButton>
            {props.view}
            <ChevronDown />
          </Menu.MenuButton>
          <Menu.MenuContainer>
            <Menu.MenuItem onClick={() => handleChangeView("month")}>
              Month
            </Menu.MenuItem>
            <Menu.MenuItem onClick={() => handleChangeView("week")}>
              Week
            </Menu.MenuItem>
            <Menu.MenuItem onClick={() => handleChangeView("day")}>
              Day
            </Menu.MenuItem>
            <Menu.MenuItem onClick={() => handleChangeView("agenda")}>
              Agenda
            </Menu.MenuItem>
          </Menu.MenuContainer>
        </Menu>
      </div>
    </div>
  );
};

export default CalendarToolbar;
