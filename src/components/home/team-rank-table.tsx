import clsx from "clsx";
import { componentBackgroundChange } from "utils/util";

import Avatar from "components/common/avatar";
import Loading from "components/common/loading";

import { useTheme } from "stores/theme-store";
import { useNavigate } from "react-router-dom";
import { useTeamRankQuery } from "hooks/services/quries/use-football-query";

interface ITeamRankTableProps {
  leagueId: string;
  season: string;
}

const TeamRankTable: React.FunctionComponent<ITeamRankTableProps> = ({
  leagueId,
  season,
}) => {
  const theme = useTheme();
  const nav = useNavigate();

  const { data, isLoading, isError, isSuccess } = useTeamRankQuery(
    leagueId,
    season,
  );

  if (isLoading) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "h flex min-h-[500px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
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
          "h flex min-h-[500px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        데이터를 불러오던 도중 오류가 발생했어요 🤮
      </div>
    );
  }

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "overflow-x-auto rounded-lg border-b border-r border-MediumGrey shadow-md",
      )}
    >
      {isSuccess && (
        <table className="min-w-full divide-gray-200 ">
          <thead className="text-base font-semibold">
            <tr>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Rank
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Team
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Played
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Win
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Draw
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Lose
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                Points
              </th>
              <th className="hidden whitespace-nowrap  px-6 py-3 text-left  uppercase leading-4 tracking-wider text-gray-500 sm:table-cell">
                Form
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.league.standings[0].map((item, index) => (
              <tr
                key={item.team.id}
                className="cursor-pointer transition-colors hover:bg-MediumGrey hover:text-White"
                onClick={() => {
                  nav(`/football/${leagueId}/team/${item.team.id}/info`);
                }}
              >
                <td
                  className={clsx(
                    "whitespace-no-wrap border-gray-200 px-6 py-4",
                    index + 1 > 0 &&
                      index + 1 <= 4 &&
                      "border-l-2 border-l-yellow-300",
                    index + 1 === 5 && "border-l-2 border-l-gray-300",
                    index + 1 >= 18 && "border-l-2 border-l-Red",
                  )}
                >
                  {index + 1}
                </td>
                <td className="whitespace-no-wrap border-gray-200 px-6 py-4">
                  <div className="flex  items-center gap-x-3">
                    <Avatar imgUrl={item.team.logo} size="md" />
                    <span>{item.team.name}</span>
                  </div>
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4 ">
                  {item.all.played}
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4 ">
                  {item.all.win}
                </td>
                <td className="whitespace-no-wrap border-gray-200 px-6 py-4 ">
                  {item.all.draw}
                </td>
                <td className="whitespace-no-wrap border-gray-200 px-6 py-4 ">
                  {item.all.lose}
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4 ">
                  {item.points}
                </td>
                <td className="whitespace-no-wrap hidden  border-gray-200 px-6 py-4 sm:table-cell">
                  <div className="flex gap-x-1">
                    {item.form.split("").map((el, i) => (
                      <div
                        key={i}
                        className={clsx(
                          "flex h-5 w-5 items-center justify-center rounded-full  p-2 text-sm text-white",
                          el === "W" && "bg-green-500",
                          el === "D" && "bg-gray-500",
                          el === "L" && "bg-red-500",
                        )}
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamRankTable;
