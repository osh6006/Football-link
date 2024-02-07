import dayjs from "dayjs";
import "dayjs/locale/ko";
import {
  Calendar as BigCalendar,
  View,
  dayjsLocalizer,
} from "react-big-calendar";

import "./calendar.css";
import CalendarToolbar from "./calendar-toolbar";

interface ICalendarProps {
  date: string;
  events: any[];
  controlDate: (action: string, Type: View) => void;
  initDate: () => void;
}

dayjs.locale("ko");

const Calendar: React.FunctionComponent<ICalendarProps> = ({
  events,
  date,
  initDate,
  controlDate,
}) => {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <BigCalendar
      events={events}
      date={date}
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      onNavigate={(data) => {
        // console.log(formatMonthStartAndEnd(data));
      }}
      components={{
        toolbar: (props) => (
          <CalendarToolbar
            props={props}
            date={props.date}
            label={props.label}
            initDate={initDate}
            controlDate={controlDate}
            onView={props.onView}
            // onNavigate={props.onNavigate}
          />
        ),
      }}
    />
  );
};

export default Calendar;
