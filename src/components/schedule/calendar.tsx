import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Calendar as BigCalendar, dayjsLocalizer } from "react-big-calendar";

import "./calendar.css";
import { formatMonthStartAndEnd } from "libs/day";
import CalendarToolbar from "./calendar-toolbar";
import { useState } from "react";

interface ICalendarProps {
  season: string;
  events: any[];
  date: string;
}

dayjs.locale("ko");

const Calendar: React.FunctionComponent<ICalendarProps> = ({
  events,
  season,
  date,
}) => {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <BigCalendar
      events={events}
      date={season}
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      onNavigate={(data) => {
        // console.log(formatMonthStartAndEnd(data));
      }}
      components={{
        toolbar: (props) => (
          <CalendarToolbar
            date={props.date}
            label={props.label}
            onView={props.onView}
            onNavigate={props.onNavigate}
          />
        ),
      }}
    />
  );
};

export default Calendar;
