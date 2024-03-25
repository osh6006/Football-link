import { useState } from "react";

export default function useSelectBox<T>(filterKey: string, array?: T[]) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredItems =
    query === ""
      ? array
      : array?.filter((item: any) => {
          return item[filterKey].toLowerCase().includes(query.toLowerCase());
        });

  return { query, setQuery, isFocused, setIsFocused, filteredItems };
}
