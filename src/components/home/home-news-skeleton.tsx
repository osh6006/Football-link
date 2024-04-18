import clsx from "clsx";
import { useTheme } from "stores/theme-store";

interface IHomeNewsSkeletonProps {}

const HomeNewsSkeleton: React.FunctionComponent<IHomeNewsSkeletonProps> = (
  props,
) => {
  const theme = useTheme();

  return (
    <div className="grid w-full animate-pulse gap-4 sm:grid-cols-2 md:grid-cols-3">
      {[1, 2, 3].map((el) => (
        <div key={el} className="space-y-2">
          <div
            className={clsx(
              "h-32 w-full",
              theme === "light" ? "bg-gray-200" : "",
              theme === "dark" ? "bg-gray-600" : "",
            )}
          />
          <div
            className={clsx(
              "h-4 w-full",
              theme === "light" ? "bg-gray-200" : "",
              theme === "dark" ? "bg-gray-600" : "",
            )}
          />
          <div
            className={clsx(
              "h-4 w-3/4",
              theme === "light" ? "bg-gray-200" : "",
              theme === "dark" ? "bg-gray-600" : "",
            )}
          />
          <div
            className={clsx(
              "h-4 w-2/3",
              theme === "light" ? "bg-gray-200" : "",
              theme === "dark" ? "bg-gray-600" : "",
            )}
          />

          <div className="flex justify-between">
            <div
              className={clsx(
                "h-4 w-14",
                theme === "light" ? "bg-gray-200" : "",
                theme === "dark" ? "bg-gray-600" : "",
              )}
            />
            <div
              className={clsx(
                "h-4 w-14",
                theme === "light" ? "bg-gray-200" : "",
                theme === "dark" ? "bg-gray-600" : "",
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeNewsSkeleton;
