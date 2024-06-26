import { Table as TableType, flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import {
  ArrowDown01Icon,
  ArrowDown10Icon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Loading from "./loading";
import ComponentStatusContainer from "components/layouts/component-status-container";
import { useNavigate } from "react-router-dom";

interface ITableProps {
  isLoading?: boolean;
  isError?: boolean;
  leagueId: number;
  type?: "team" | "player";
  tableData: TableType<any>;
}

const Table: React.FunctionComponent<ITableProps> = ({
  type,
  isError,
  leagueId,
  isLoading,
  tableData,
}) => {
  const nav = useNavigate();

  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="430">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="430">
        서버에서 오류가 발생했어요 🤮
      </ComponentStatusContainer>
    );
  }

  return (
    <>
      <div className="mb-2 rounded-md border-2 border-MediumGrey p-1 sm:hidden">
        {tableData.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="grid w-full grid-cols-3">
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} className="" colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={`${
                        header.column.getIsSorted() ? "bg-Main text-white" : ""
                      } ${
                        header.column.getCanSort()
                          ? "flex w-full cursor-pointer select-none items-center justify-center gap-x-1 rounded-sm p-1 font-semibold"
                          : ""
                      }`}
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? "Sort ascending"
                            : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <ArrowDown01Icon />,
                        desc: <ArrowDown10Icon />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </div>
      <table className="w-full border-separate rounded-md border-MediumGrey sm:border-2">
        <thead className="hidden sm:table-header-group">
          {tableData.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border uppercase">
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
                            <span className="pl-1 text-Main">
                              <ChevronUp size={20} />
                            </span>
                          ),
                          desc: (
                            <span className="pl-1 text-Main">
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
        <tbody className="space-y-4 sm:space-y-0">
          {tableData.getRowModel().rows.map((row) => {
            const id =
              type === "team" ? row.original.team.id : row.original.player.id;

            return (
              <tr
                key={row.id}
                className="relative flex cursor-pointer flex-col justify-end divide-y-2 divide-MediumGrey rounded-md border-x-2 border-y-2 border-MediumGrey transition-colors hover:bg-Main hover:text-White sm:table-row sm:divide-none sm:border-none"
                onClick={() => {
                  nav(`/football/${leagueId}/${type}/${id}/info`);
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  const breakpoints: any = cell.column.columnDef.meta;
                  return (
                    <td
                      key={cell.id}
                      data-label={cell.column.id}
                      className={clsx(
                        "px-6 py-3 text-right before:float-start before:font-bold before:uppercase before:content-[attr(data-label)] sm:text-start sm:before:hidden",
                        breakpoints?.className,
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
