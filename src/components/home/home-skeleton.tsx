import clsx from "clsx";
import { useTheme } from "stores/theme-store";

interface IHomeSkeletonProps {}

const HomeSkeleton: React.FunctionComponent<IHomeSkeletonProps> = (props) => {
  const theme = useTheme();
  return (
    <div className="flex h-full animate-pulse items-center space-y-2">
      <div className="flex w-full items-center justify-around">
        <div
          className={clsx(
            "h-32 w-32 rounded-full sm:h-40 sm:w-40",
            theme === "light" ? "bg-gray-200" : "",
            theme === "dark" ? "bg-gray-600" : "",
          )}
        />
        <span className="text-lg sm:text-3xl">vs</span>
        <div
          className={clsx(
            "aspect-square h-32 w-32  rounded-full sm:h-40 sm:w-40",
            theme === "light" ? "bg-gray-200" : "",
            theme === "dark" ? "bg-gray-600" : "",
          )}
        />
      </div>
    </div>
  );
};

export default HomeSkeleton;
