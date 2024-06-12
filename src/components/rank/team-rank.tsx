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
import { useTeamRankQuery } from "hooks/tanstack-query/use-rank-query";
import LatestForm from "components/common/latest-form";

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

  const { data, isLoading, isError } = useTeamRankQuery(league, season);

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
          <div className=" flex flex-col items-end gap-x-3 sm:flex-row sm:items-center">
            <Avatar imgUrl={info.getValue().logo} size="md" />
            <span className="truncate">{info.getValue().name}</span>
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
        // meta: {
        //   className: "hidden xl:table-cell",
        // },
      }),
      columnHelper.accessor((row) => row.form, {
        id: "form",
        cell: (info) => (
          <div className="">
            {info.getValue() ? (
              <LatestForm form={info.getValue()} />
            ) : (
              <span>Not Form</span>
            )}
          </div>
        ),
        header: () => <span>Form</span>,
        // meta: {
        //   className: "hidden lg:table-cell",
        // },
      }),
    ];
  }, [columnHelper]);

  const table = useReactTable({
    data: data?.league.standings.at(-1) || emptyArray,
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
        <h1>There's been an error on the server 🤮</h1>
      </ComponentStatusContainer>
    );
  }

  return <Table tableData={table} leagueId={data?.league.id!} type="team" />;
};

export default TeamRank;
