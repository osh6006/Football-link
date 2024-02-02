import { useMemo, useState } from "react";
import { SortingState, createColumnHelper } from "@tanstack/react-table";

const emptyArray: any = [];

export default function useTable<T>() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const columnHelper = createColumnHelper<T>();

  return { sorting, setSorting, columnHelper, emptyArray };
}
