import useTable from "hooks/use-table";
import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useTopPlayerQuery } from "hooks/services/quries/use-football-query";

import TopPlayerSelector from "./top-player-selector";

import { PlayerSelectType, rapidPlayerResponse } from "types/football";
import Avatar from "components/common/avatar";
import Table from "components/common/table";
import { useNavigate } from "react-router-dom";
import useLeagueStore from "stores/league-store";

interface IPlayerRankTableProps {
  league: number;
  season: string;
}

const PlayerRank: React.FunctionComponent<IPlayerRankTableProps> = ({
  league,
  season,
}) => {
  const nav = useNavigate();
  const { selectedLeague } = useLeagueStore();

  const [type, setType] = useState<PlayerSelectType>("topscorers");
  const { sorting, setSorting, columnHelper, emptyArray } =
    useTable<rapidPlayerResponse>();

  const handleType = (type: PlayerSelectType) => {
    setType(type);
  };

  const { data, isLoading, isError } = useTopPlayerQuery(type, season, league);

  const columns = useMemo(() => {
    return [
      columnHelper.accessor((_, i) => i, {
        id: "rank",
        cell: (info) => {
          return <div>{info.getValue() + 1}</div>;
        },
        header: () => <span>순위</span>,
      }),
      columnHelper.accessor((row) => row.player, {
        id: "name",
        cell: (info) => (
          <div className=" flex cursor-pointer items-center gap-x-3 whitespace-nowrap">
            <Avatar imgUrl={info.getValue().photo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span className="flex items-center">이름</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].team, {
        id: "team",
        cell: (info) => (
          <div className=" flex items-center gap-x-3 whitespace-nowrap">
            <Avatar imgUrl={info.getValue().logo} size="md" />
            <span>{info.getValue().name}</span>
          </div>
        ),
        header: () => <span>팀</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].games.minutes, {
        id: "played",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>경기 시간(분)</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals.total, {
        id: "goal",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>골</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals.assists, {
        id: "assist",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>도움</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].goals, {
        id: "attack-point",
        cell: (info) => (
          <div>{info.getValue().total + info.getValue().assists || 0}</div>
        ),
        header: () => <span>공격 포인트</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].games.rating, {
        id: "rating",
        cell: (info) => (
          <span>{parseFloat(info.getValue()).toFixed(1) || 0}</span>
        ),
        header: () => <span>평균 평점</span>,
        meta: {
          className: "hidden xl:table-cell",
        },
      }),
      columnHelper.accessor((row) => row.statistics[0].cards.yellow, {
        id: "yellow",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>경고</span>,
      }),
      columnHelper.accessor((row) => row.statistics[0].cards.red, {
        id: "red",
        cell: (info) => <div>{info.getValue() || 0}</div>,
        header: () => <span>퇴장</span>,
      }),
    ];
  }, [columnHelper, nav, selectedLeague?.rapid_football_league_id]);

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
      <TopPlayerSelector setType={handleType} type={type} />
      {/* table */}
      <h2 className="text-lg font-semibold">종합 순위</h2>
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
