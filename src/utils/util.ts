export const isIncludeInSelectedItem = (array: any[], id: string) => {
  if (array.find((el) => el.id === id)) return true;
  return false;
};

export const addUserIdToArray = (array: any[], userId: string) => {
  return array.map((el) => {
    return { ...el, user_id: userId };
  });
};
