import { useMemo } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";

import Avatar from "components/common/avatar";

import { rapidFootballTeamStanding } from "types/football";
import useTable from "hooks/use-table";
import Table from "components/common/table";
import ComponentStatusContainer from "components/layouts/component-status-container";
import Loading from "components/common/loading";
import { useTeamRankQuery } from "hooks/services/quries/use-rank-query";

interface IFootballRankTableProps {
  league: string;
  season: string;
}

const TeamRank: React.FunctionComponent<IFootballRankTableProps> = ({
  league,
  season,
}) => {
  const { sorting, setSorting, columnHelper, emptyArray } =
    useTable<rapidFootballTeamStanding>();

  const columns = useMemo(() => {
    return [
      columnHelper.accessor((row) => row.rank, {
        id: "rank",
        cell: (info) => {
          const champions =
            info.getValue() <= 4 ? "before:border-yellow-300" : "";
          const uropa =
            info.getValue() >= 5 && info.getValue() <= 6
              ? "before:border-sky-300"
              : "";
          const down = info.getValue() >= 18 ? "before:border-red-300" : "";

          return (
            <div
              className={clsx(
                `before:absolute before:inset-y-0 before:left-0 before:top-0 before:border-2 before:border-transparent before:content-['']`,
                champions,
                uropa,
                down,
              )}
            >
              {info.getValue()}
            </div>
          );
        },
        header: () => <span>Rank</span>,
      }),
      columnHelper.accessor((row) => row.team, {
        id: "team",
        cell: (info) => (
          <div className=" flex items-center gap-x-3">
            <Avatar imgUrl={info.getValue().logo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span className="flex items-center">Team</span>,
      }),
      columnHelper.accessor((row) => row.all.played, {
        id: "played",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>Played</span>,
        meta: {
          className: "hidden md:table-cell",
        },
      }),
      columnHelper.accessor((row) => row.all.win, {
        id: "win",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>Win</span>,
      }),
      columnHelper.accessor((row) => row.all.draw, {
        id: "draw",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>Draw</span>,
      }),
      columnHelper.accessor((row) => row.all.draw, {
        id: "lose",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>Lose</span>,
      }),
      columnHelper.accessor((row) => row.points, {
        id: "point",
        cell: (info) => <div>{info.getValue()}</div>,
        header: () => <span>Points</span>,
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
        header: () => <span>Winrate</span>,
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
        header: () => <span>Form</span>,
        meta: {
          className: "hidden lg:table-cell",
        },
      }),
    ];
  }, [columnHelper]);

  const { data, isLoading, isError } = useTeamRankQuery(league, season);

  const table = useReactTable({
    data: data?.league.standings[0] || emptyArray,
    columns: columns || emptyArray,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return (
      <ComponentStatusContainer state="loading" height="500">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer state="error" height="500">
        <h1>An error occurred while fetching data from the server. </h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <>
      <Table tableData={table} leagueId={data?.league.id!} type="team" />
      <div className="mt-4">
        <p>- Rules</p>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-yellow-400 before:content-['']">
          The first to fourth place teams qualify for the UEFA Champions.
        </div>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-sky-300 before:content-['']">
          The fifth-placed team will qualify for the Europa League (the
          next-placed team qualifies based on the results of the cup tournament)
        </div>
        <div className="mt-2 flex items-center gap-x-2 before:block before:h-4 before:w-4 before:bg-red-500 before:content-['']">
          The 18th-20th ranked teams will be relegated to the second division.
        </div>
      </div>
    </>
  );
};

export default TeamRank;
