import { useMemo } from "react";
import useTable from "hooks/use-table";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useTopPlayerQuery } from "hooks/tanstack-query/use-rank-query";

import Table from "components/common/table";
import Avatar from "components/common/avatar";
import TopPlayerSelector from "./top-player-selector";

import { rapidPlayerResponse } from "types/football";

interface IPlayerRankTableProps {
  league: number;
  season: string;
}

const PlayerRank: React.FunctionComponent<IPlayerRankTableProps> = ({
  league,
  season,
}) => {
  const [searchParams] = useSearchParams();
  const tabName = searchParams.get("playerType") || "topscorers";

  const { sorting, setSorting, columnHelper, emptyArray } =
    useTable<rapidPlayerResponse>();

  const { data, isLoading, isError } = useTopPlayerQuery(
    tabName,
    season,
    league,
  );

  const columns = useMemo(() => {
    return [
      columnHelper.accessor((_, i) => i, {
        id: "rank",
        cell: (info) => {
          return <div>{info.getValue() + 1}</div>;
        },
        header: () => <span>Rank</span>,
      }),
      columnHelper.accessor((row) => row.player, {
        id: "name",
        cell: (info) => (
          <div className=" flex cursor-pointer items-center gap-x-3 whitespace-nowrap">
            <Avatar imgUrl={info.getValue().photo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span className="flex items-center">Name</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].team, {
        id: "team",
        cell: (info) => (
          <div className=" flex items-center gap-x-3 whitespace-nowrap">
            <Avatar imgUrl={info.getValue().logo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span>Team</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].games.minutes, {
        id: "played",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>Running Time(minute)</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals.total, {
        id: "goal",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>Goal</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals.assists, {
        id: "assist",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>Assist</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals, {
        id: "attack-point",
        cell: (info) => (
          <div>{info.getValue().total + info.getValue().assists || 0}</div>
        ),
        header: () => <span>Attack Point</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].games.rating, {
        id: "rating",
        cell: (info) => (
          <span>{parseFloat(info.getValue()).toFixed(1) || 0}</span>
        ),
        header: () => <span>Avarage</span>,
        meta: {
          className: "hidden xl:table-cell",
        },
      }),
      columnHelper.accessor((row) => row.statistics[0].cards.yellow, {
        id: "yellow",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>Yellow Card</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].cards.red, {
        id: "red",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>Red Card</span>,
      }),
    ];
  }, [columnHelper]);

  const table = useReactTable({
    // data: emptyArray,
    data: data || emptyArray,
    columns: columns || emptyArray,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-4">
      <TopPlayerSelector />
      {/* table */}
      <Table
        type="player"
        leagueId={123}
        tableData={table}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default PlayerRank;
