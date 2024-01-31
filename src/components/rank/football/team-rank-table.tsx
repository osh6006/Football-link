import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useFootballTeamRankQuery } from "hooks/services/quries/use-football-query";
import { useCallback, useMemo, useState } from "react";
import { rapidFootballTeamStanding } from "types/football";

interface IFootballRankTableProps {
  league: string;
  season: string;
}

const emptyArray: any = [];

const TeamRankTable: React.FunctionComponent<IFootballRankTableProps> = ({
  league,
  season,
}) => {
  const columnHelper = createColumnHelper<rapidFootballTeamStanding>();
  const [sorting, setSorting] = useState<SortingState>([]);
  // const { data, isLoading, isError } = useFootballTeamRankQuery(league, season);

  const columns = useMemo<any>(() => {
    return [
      columnHelper.accessor((row) => row.rank, {
        id: "rank",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>순위</span>,
      }),
      columnHelper.accessor((row) => row.team, {
        id: "team",
        cell: (info) => <div>{info.getValue().name}</div>,
        header: () => <span>팀</span>,
      }),
      columnHelper.accessor((row) => row.all.played, {
        id: "played",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>경기 수</span>,
      }),
      columnHelper.accessor((row) => row.all.win, {
        id: "win",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>승</span>,
      }),
      columnHelper.accessor((row) => row.all.draw, {
        id: "draw",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>무</span>,
      }),
      columnHelper.accessor((row) => row.all.draw, {
        id: "lose",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>패</span>,
      }),
      columnHelper.accessor((row) => row.points, {
        id: "point",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>승점</span>,
      }),
      columnHelper.accessor((row) => row.all, {
        id: "percentage",
        cell: (info) => (
          <div>{info.getValue().played / info.getValue().win}</div>
        ),
        header: () => <span>승률</span>,
      }),
      columnHelper.accessor((row) => row.form, {
        id: "form",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>최근 5경기</span>,
      }),
    ];
  }, [columnHelper]);

  const table = useReactTable({
    // data: data?.league.standings[0] || emptyArray,
    data: emptyArray,
    columns: columns || emptyArray,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="my-auto w-full border">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b uppercase text-gray-800">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-3 text-left leading-4 tracking-wider "
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-6 py-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamRankTable;
