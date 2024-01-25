import { faker } from "@faker-js/faker";
import clsx from "clsx";
import useThemeStore from "stores/theme-store";

interface IHomeNextTableProps {}

const HomeNextTable: React.FunctionComponent<IHomeNextTableProps> = (props) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={clsx(
        `relative rounded-md p-2 shadow-md`,
        theme === "light" ? "bg-White " : "bg-DarkGrey ",
      )}
    >
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
      <p className="text-center">2022. 04. 12</p>
      <p className="text-center">blah blah Stadium</p>
    </div>
  );
};

export default HomeNextTable;
