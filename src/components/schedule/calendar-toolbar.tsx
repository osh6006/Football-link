import { ButtonHTMLAttributes } from "react";
import { NavigateAction, View } from "react-big-calendar";

import { MoveLeft, MoveRight } from "lucide-react";
import dayjs from "dayjs";

interface ICalendarToolbarProps {
  label: string;
  date: Date;
  onView: (view: View) => void;
  onNavigate: (action: NavigateAction, newDate: Date) => void;
}

const CalendarTollBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="select-none rounded-md border border-MediumGrey px-3 py-2 transition-all hover:bg-Main hover:text-White
    focus:outline-none focus:ring-2 focus:ring-Main active:scale-95
    "
    >
      {children}
    </button>
  );
};

const CalendarToolbar: React.FunctionComponent<ICalendarToolbarProps> = ({
  label,
  date,
  onNavigate,
  onView,
}) => {
  const handleChangeView = (view: View) => {
    onView(view);
  };

  const handleNavigate = (action: NavigateAction) => {
    console.log(date);
    onNavigate(action, date);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-y-2 py-3 sm:flex-row">
      <div className="flex gap-x-2">
        <CalendarTollBtn
          type="button"
          onClick={handleNavigate.bind(null, "PREV")}
        >
          <MoveLeft />
        </CalendarTollBtn>
        <CalendarTollBtn
          type="button"
          onClick={handleNavigate.bind(null, "TODAY")}
        >
          오늘
        </CalendarTollBtn>
        <CalendarTollBtn
          type="button"
          onClick={handleNavigate.bind(null, "NEXT")}
        >
          <MoveRight />
        </CalendarTollBtn>
      </div>
      <span className="text-2xl font-semibold text-Main">{label}</span>
      <div className="flex gap-x-2">
        <CalendarTollBtn onClick={() => handleChangeView("month")}>
          월 별
        </CalendarTollBtn>
        <CalendarTollBtn onClick={() => handleChangeView("week")}>
          주 별
        </CalendarTollBtn>
        <CalendarTollBtn onClick={() => handleChangeView("day")}>
          일 별
        </CalendarTollBtn>
        <CalendarTollBtn onClick={() => handleChangeView("agenda")}>
          통 계
        </CalendarTollBtn>
      </div>
    </div>
  );
};

export default CalendarToolbar;
