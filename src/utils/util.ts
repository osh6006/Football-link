import clsx from "clsx";
import { ThemeColor } from "types";

export const isIncludeInSelectedItem = (array: any[], id: string) => {
  if (array.find((el) => el.id === id)) return true;
  return false;
};

export const addUserIdToArray = (array: any[], userId: string) => {
  return array.map((el) => {
    return { ...el, user_id: userId };
  });
};

export const isIncludeInArray = (array: any[], item: any) => {
  if (array.find((el) => el.id === item.id)) return true;
  return false;
};

export const flattenedArray = (array: any[], flatternKey: string) => {
  return array.map((item) => item[flatternKey]);
};

export const componentBackgroundChange = (
  theme: ThemeColor,
  className: string,
) => {
  return clsx(
    className,
    theme === "light" && "bg-White",
    theme === "dark" && "bg-DarkGrey",
  );
};
