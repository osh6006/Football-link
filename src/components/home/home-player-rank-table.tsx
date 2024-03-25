import clsx from "clsx";
import { componentBackgroundChange } from "utils/util";

import Avatar from "components/common/avatar";
import Loading from "components/common/loading";

import { useTheme } from "stores/theme-store";
import { useNavigate } from "react-router-dom";
import { useLeagueStore } from "stores/league-store";
import { useTopPlayerQuery } from "hooks/services/quries/use-rank-query";

interface IHomePlayerRankTableProps {
  type: "assist" | "goal";
  distance?: "short" | "long";
}

const rankType = {
  goal: "topscorers",
  assist: "topassists",
};

const HomePlayerRankTable: React.FunctionComponent<
  IHomePlayerRankTableProps
> = ({ type, distance }) => {
  const theme = useTheme();
  const nav = useNavigate();

  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const {
    data: topscorers,
    isLoading,
    isError,
  } = useTopPlayerQuery(
    rankType[type],
    selectedLeague?.season!,
    selectedLeague?.leagueId!,
  );

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[350px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        <Loading size="md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[350px] w-full items-center justify-center rounded-md p-2 text-xl font-bold shadow-md",
        )}
      >
        An error occurred while trying to fetch data 🤮
      </div>
    );
  }

  return (
    <div
      className={clsx(
        `overflow-x-auto rounded-lg border-b border-r border-MediumGrey shadow-md`,
        theme === "light" && "bg-White",
        theme === "dark" && "bg-VeryDarkGreyDark",
      )}
    >
      <table className="min-w-full  divide-gray-200 ">
        <thead className="text-base font-semibold">
          <tr>
            <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              Rank
            </th>
            <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              Name
            </th>

            <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              {type === "goal" && "Goal"}
              {type === "assist" && "Assist"}
            </th>
          </tr>
        </thead>
        <tbody>
          {topscorers?.map((item, index) => {
            if (index > 5) return null;
            return (
              <tr
                key={index}
                className="cursor-pointer transition-colors hover:bg-MediumGrey hover:text-White"
                onClick={() =>
                  nav(
                    `/football/${selectedLeague?.leagueId}/player/${item.player.id}/info`,
                  )
                }
              >
                <td
                  className={clsx(
                    "whitespace-nowrap border-gray-200 px-6 py-4",
                  )}
                >
                  {index + 1}
                </td>
                <td className="whitespace-nowrap  border-gray-200 px-6 py-4">
                  <div className=" flex items-center gap-x-3">
                    <div className="flex cursor-pointer items-center gap-x-2 whitespace-nowrap ">
                      <Avatar imgUrl={item.player.photo} size="md" />
                      <span>{item.player?.name}</span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap border-gray-200 px-6 py-4 ">
                  {type === "goal" && item?.statistics[0].goals.total}
                  {type === "assist" && item?.statistics[0].goals.assists}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePlayerRankTable;
