import dayjs from "dayjs";
import "dayjs/locale/ko"; // import locale

export const formatPublicDay = (dateString: string) => {
  // dateString을 받아서 포맷팅
  return dayjs(dateString).format("MM월 DD일 HH시, YYYY");
};

export const formatMonthStartAndEnd = (date: Date) => {
  // 주어진 날짜의 dayjs 객체를 생성합니다.
  const dateObj = dayjs(date);

  // 해당 월의 첫날을 구합니다.
  const monthStart = dayjs(dateObj.startOf("month").toDate()).format(
    "YYYY-MM-DD",
  );

  // 해당 월의 마지막날을 구합니다.
  const monthEnd = dayjs(dateObj.endOf("month").toDate()).format("YYYY-MM-DD");

  return { monthStart, monthEnd };
};
