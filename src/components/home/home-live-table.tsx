import { faker } from "@faker-js/faker";
import clsx from "clsx";
import * as React from "react";
import useThemeStore from "stores/theme-store";

interface IHomeLiveTableProps {}

const HomeLiveTable: React.FunctionComponent<IHomeLiveTableProps> = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className={clsx(
        `relative rounded-md p-2 shadow-md`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
      <div className="flex w-fit select-none items-center gap-x-2 rounded-md px-2 py-1 uppercase shadow-md">
        <p className="text-lg font-bold">live</p>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      <div
        className={clsx(
          `flex min-h-[200px] w-full items-center justify-around rounded-md border-MediumGrey text-MediumGrey`,
        )}
      >
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img
            src={faker.image.avatarLegacy()}
            alt="home"
            className="rounded-full"
          />
          <p>Man.Utd</p>
        </div>
        <span className="text-3xl">vs</span>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <img
            src={faker.image.avatarLegacy()}
            alt="away"
            className="rounded-full"
          />
          <p>Man.Utd</p>
        </div>
      </div>
      <p className="text-center">blah blah Stadium</p>
    </div>
  );
};

export default HomeLiveTable;
