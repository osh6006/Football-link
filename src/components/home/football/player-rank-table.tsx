import { faker } from "@faker-js/faker";
import clsx from "clsx";
import Avatar from "components/common/avatar";
import * as React from "react";
import useThemeStore from "stores/theme-store";

interface IPlayerRankTableProps {
  type: "assist" | "goal";
  distance?: "short" | "long";
}

const PlayerRankTable: React.FunctionComponent<IPlayerRankTableProps> = ({
  type,
  distance,
}) => {
  const { theme } = useThemeStore();

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
            <th className=" px-6 py-3 text-left   uppercase leading-4 tracking-wider text-gray-500">
              순위
            </th>
            <th className=" px-6 py-3 text-left   uppercase leading-4 tracking-wider text-gray-500">
              이름
            </th>
            <th className=" px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
              나라
            </th>
            <th className=" px-6 py-3 text-left uppercase leading-4 tracking-wider text-gray-500">
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
  );
};

export default PlayerRankTable;
