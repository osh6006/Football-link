import { useTopPlayerQuery } from "hooks/services/quries/use-football-query";
import useTable from "hooks/use-table";
import { useState } from "react";

interface IPlayerRankTableProps {
  league: number;
  season: string;
}

const PlayerRank: React.FunctionComponent<IPlayerRankTableProps> = ({
  league,
  season,
}) => {
  const [type, setType] = useState("");
  const { sorting, setSorting, columnHelper, emptyArray } = useTable<any>();

  const { data, isLoading, isError } = useTopPlayerQuery(type, season, league);
  console.log(data, isLoading);

  // if (isLoading) {
  //   return (
  //     <div
  //       className={
  //         "h flex min-h-[430px] w-full items-center justify-center rounded-md p-2 text-xl  "
  //       }
  //     >
  //       <Loading size="md" />
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div
  //       className={
  //         "h flex min-h-[430px] w-full items-center justify-center rounded-md p-2 text-xl"
  //       }
  //     >
  //       서버에서 오류가 발생했어요 🤮
  //     </div>
  //   );
  return <>Player!</>;
};

export default PlayerRank;
