import dayjs from "dayjs";
import "dayjs/locale/ko"; // import locale

export const formatPublicDay = (dateString: string) => {
  // dateString을 받아서 포맷팅
  return dayjs(dateString).format("MM월 DD일 HH시, YYYY");
};
