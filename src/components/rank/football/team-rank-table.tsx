import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import Avatar from "components/common/avatar";
import Loading from "components/common/loading";
import { useFootballTeamRankQuery } from "hooks/services/quries/use-football-query";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
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
        cell: (info) => {
          return (
            <div
              className={clsx(
                `before:absolute before:inset-y-0 before:left-0 before:top-0 before:border-2 before:border-transparent before:content-['']
                ${info.getValue() <= 4 && "before:border-yellow-300"}
                ${info.getValue() === 5 && "before:border-blue-300"}
                ${info.getValue() === 6 && "before:border-blue-300"}
                ${info.getValue() >= 18 && "before:border-red-400"}
                `,
              )}
            >
              {info.getValue()}
            </div>
          );
        },
        header: () => <span>순위</span>,
      }),
      columnHelper.accessor((row) => row.team, {
        id: "team",
        cell: (info) => (
          <div className=" flex items-center gap-x-3">
            <Avatar imgUrl={info.getValue().logo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span>팀</span>,
      }),
      columnHelper.accessor((row) => row.all.played, {
        id: "played",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>경기 수</span>,
        meta: {
          className: "hidden md:table-cell",
        },
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
          <div>
            {Number(
              (info.getValue().win / info.getValue().played) * 100,
            ).toFixed(2)}
            %
          </div>
        ),
        header: () => <span>승률</span>,
        meta: {
          className: "hidden xl:table-cell",
        },
      }),
      columnHelper.accessor((row) => row.form, {
        id: "form",
        cell: (info) => (
          <div className="flex gap-x-1">
            {info
              .getValue()
              .split("")
              .map((el, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex h-5 w-5 items-center  justify-center rounded-full p-2 text-sm text-white shadow-md",
                    el === "W" && "bg-green-500",
                    el === "D" && "bg-gray-500",
                    el === "L" && "bg-red-500",
                  )}
                >
                  {el}
                </div>
              ))}
          </div>
        ),
        header: () => <span>최근 5경기</span>,
        meta: {
          className: "hidden lg:table-cell",
        },
      }),
    ];
  }, [columnHelper]);

  const table = useReactTable({
    // data: data?.league.standings[0] || emptyArray,
    data: emptyArray,
    columns: columns || emptyArray,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  if (false) {
    return (
      <div
        className={
          "h flex min-h-[430px] w-full items-center justify-center rounded-md p-2 text-xl  "
        }
      >
        <Loading size="md" />
      </div>
    );
  }

  if (false) {
    return (
      <div
        className={
          "h flex min-h-[430px] w-full items-center justify-center rounded-md p-2 text-xl"
        }
      >
        서버에서 오류가 발생했어요 🤮
      </div>
    );
  }

  return (
    <>
      <table className="w-full rounded-md border border-MediumGrey ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-MediumGrey uppercase"
            >
              {headerGroup.headers.map((header) => {
                const breakpoints: any = header.column.columnDef.meta;
                return (
                  <th
                    key={header.id}
                    className={clsx(
                      "whitespace-nowrap px-6 py-3 text-left leading-4 tracking-wider",
                      breakpoints?.className,
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex min-w-[36px]"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <span className="pl-2 text-Main">
                              <ChevronUp size={20} />
                            </span>
                          ),
                          desc: (
                            <span className="pl-2 text-Main">
                              <ChevronDown size={20} />
                            </span>
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="relative">
              {row.getVisibleCells().map((cell) => {
                const breakpoints: any = cell.column.columnDef.meta;

                return (
                  <td
                    key={cell.id}
                    className={clsx("px-6 py-3", breakpoints?.className)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p>- 순위 규칙</p>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-yellow-400 before:content-['']">
          1~4위 팀은 UEFA 챔스 출전 자격을 얻는다.
        </div>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-blue-300 before:content-['']">
          5위 팀은 유로파리그 출전 자격을 얻는다. (컵대회 결과에 따라 차순위 팀
          자격 획득)
        </div>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-red-500 before:content-['']">
          18~20위 팀은 2부 리그로 강등된다.
        </div>
      </div>
    </>
  );
};

export default TeamRankTable;
