import { useEffect, useState } from "react";
import { formatMonthStartAndEnd } from "libs/day";

export interface IMonth {
  monthStart: string;
  monthEnd: string;
}

export default function useCalendar(season: string) {
  const [month, setMonth] = useState<IMonth>(
    formatMonthStartAndEnd(new Date(season)),
  );

  useEffect(() => {
    setMonth(formatMonthStartAndEnd(new Date(season)));
  }, [season]);

  return { month, setMonth };
}
