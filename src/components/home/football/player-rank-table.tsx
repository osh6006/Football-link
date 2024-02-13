import { faker } from "@faker-js/faker";
import clsx from "clsx";
import Avatar from "components/common/avatar";
import Loading from "components/common/loading";
import { useTopPlayerQuery } from "hooks/services/quries/use-football-query";
import useLeagueStore from "stores/league-store";
import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IPlayerRankTableProps {
  type: "assist" | "goal";
  distance?: "short" | "long";
}

const rankType = {
  goal: "topscorers",
  assist: "topassists",
};

const PlayerRankTable: React.FunctionComponent<IPlayerRankTableProps> = ({
  type,
  distance,
}) => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
  const season = new Date().getFullYear() - 1 + "";

  // const {
  //   data: topscorers,
  //   isLoading,
  //   isError,
  // } = useTopPlayerQuery(
  //   rankType[type],
  //   season,
  //   selectedLeague?.rapid_football_league_id!,
  // );

  if (false) {
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

  if (false) {
    return (
      <div
        className={componentBackgroundChange(
          theme,
          "flex min-h-[350px] w-full items-center justify-center rounded-md p-2 text-xl shadow-md",
        )}
      >
        데이터를 불러오는 도중 오류가 발생했어요 🤮
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
      <table className="min-w-full  divide-gray-200 ">
        <thead className="text-base font-semibold">
          <tr>
            <th className=" text-nowrap px-6 py-3 text-left  uppercase leading-4 tracking-wider text-gray-500">
              순위
            </th>
            <th className=" text-nowrap px-6 py-3  text-left uppercase leading-4 tracking-wider text-gray-500">
              이름
            </th>
            <th className=" text-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              나라
            </th>
            <th className=" text-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              골
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((item, index) => {
            if (distance === "short" && index > 4) {
              return null;
            }
            return (
              <tr key={index}>
                <td
                  className={clsx(
                    "whitespace-no-wrap border-gray-200 px-6 py-4",
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // <div
    //   className={clsx(
    //     `overflow-x-auto rounded-lg border-b border-r border-MediumGrey shadow-md`,
    //     theme === "light" && "bg-White",
    //     theme === "dark" && "bg-VeryDarkGreyDark",
    //   )}
    // >
    //   <table className="min-w-full  divide-gray-200 ">
    //     <thead className="text-base font-semibold">
    //       <tr>
    //         <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
    //           순위
    //         </th>
    //         <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
    //           이름
    //         </th>
    //         <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
    //           나라
    //         </th>
    //         <th className="whitespace-nowrap px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
    //           {type === "goal" && "골"}
    //           {type === "assist" && "도움"}
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {topscorers?.map((item, index) => {
    //         if (index > 5) return null;
    //         return (
    //           <tr key={index}>
    //             <td
    //               className={clsx(
    //                 "whitespace-nowrap border-gray-200 px-6 py-4",
    //               )}
    //             >
    //               {index + 1}
    //             </td>
    //             <td className="whitespace-nowrap  border-gray-200 px-6 py-4">
    //               <div className=" flex items-center gap-x-3">
    //                 <Avatar imgUrl={item.player.photo} size="md" />
    //                 <span>{item.player?.name}</span>
    //               </div>
    //             </td>
    //             <td className="whitespace-nowrap  border-gray-200 px-6 py-4 ">
    //               {item.player.birth.country}
    //             </td>
    //             <td className="whitespace-nowrap border-gray-200 px-6 py-4 ">
    //               {type === "goal" && item?.statistics[0].goals.total}
    //               {type === "assist" && item?.statistics[0].goals.assists}
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default PlayerRankTable;
