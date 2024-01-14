import { InsertSports } from "../types";

export const isIncludeInSelectedItem = (
  array: InsertSports[],
  value: string,
) => {
  if (array.find((el) => el.value === value)) return true;
  return false;
};

export const addUserIdToArray = (array: any[], userId: string) => {
  return array.map((el) => {
    return { ...el, user_id: userId };
  });
};
