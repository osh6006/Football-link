import clsx from "clsx";
import { faker } from "@faker-js/faker";

import Avatar from "components/common/avatar";

import useThemeStore from "stores/theme-store";
import { useFootballTeamRankQuery } from "hooks/use-football-query";
import Loading from "components/common/loading";
import { componentBackgroundChange } from "utils/util";

interface ITeamRankTableProps {
  leagueId: string;
  season: string;
}

const TeamRankTable: React.FunctionComponent<ITeamRankTableProps> = ({
  leagueId,
  season,
}) => {
  const { theme } = useThemeStore();
  // const { data, isLoading, isError, isSuccess } = useFootballTeamRankQuery(
  //   leagueId,
  //   season,
  // );

  if (false) {
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

  if (false) {
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
      {false && (
        <div className="flex  min-h-[500px] items-center justify-center">
          <Loading size="md" />
        </div>
      )}
      {false && (
        <div className="flex h-full min-h-[500px] items-center justify-center text-xl">
          서버에서 데이터를 불러올 수 없습니다.
        </div>
      )}
      {true && (
        <table className="min-w-full  divide-gray-200 ">
          <thead className="text-base font-semibold">
            <tr>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                순위
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                팀
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                승
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                무
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                패
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
                승점
              </th>
              <th className="hidden whitespace-nowrap  px-6 py-3 text-left  uppercase leading-4 tracking-wider text-gray-500 sm:table-cell">
                최근 5경기
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item, index) => (
              <tr key={index}>
                <td
                  className={clsx(
                    "whitespace-no-wrap border-gray-200 px-6 py-4",
                    index + 1 > 0 &&
                      index + 1 <= 4 &&
                      "border-l-2 border-l-yellow-300",
                    index + 1 === 5 && "border-l-2 border-l-gray-300",
                    index + 1 === 6 && "border-l-2 border-l-gray-300",
                    index + 1 >= 18 && "border-l-2 border-l-Red",
                  )}
                >
                  {index + 1}
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4">
                  <div className=" flex items-center gap-x-3">
                    <Avatar imgUrl={faker.image.avatarGitHub()} size="md" />
                    <span>Man.Utd</span>
                  </div>
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4 ">
                  12
                </td>
                <td className="whitespace-no-wrap border-gray-200 px-6 py-4 ">
                  12
                </td>
                <td className="whitespace-no-wrap border-gray-200 px-6 py-4 ">
                  5
                </td>
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4 ">
                  +5
                </td>
                <td className="whitespace-no-wrap hidden  border-gray-200 px-6 py-4 sm:table-cell">
                  <div className="flex gap-x-1">
                    {[1, 2, 3, 4, 5].map((el) => (
                      <div
                        key={el}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 p-2 text-sm text-white drop-shadow-md"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tbody>
            {data.league.standings[0].map((item, index) => (
              <tr key={item.team.id}>
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
                <td className="whitespace-no-wrap  border-gray-200 px-6 py-4">
                  <div className=" flex items-center gap-x-3">
                    <Avatar imgUrl={item.team.logo} size="md" />
                    <span>{item.team.name}</span>
                  </div>
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
          </tbody> */}
        </table>
      )}
    </div>
  );
};

export default TeamRankTable;
