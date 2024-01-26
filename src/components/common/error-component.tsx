import clsx from "clsx";
import useThemeStore from "stores/theme-store";

interface IErrorComponentProps {
  children: React.ReactNode;
}

const ErrorComponent: React.FunctionComponent<IErrorComponentProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={clsx(
        "flex min-w-96 max-w-md  items-center justify-center rounded-md p-5 shadow-md",
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      <div className="p-6 pt-0 text-center">
        <svg
          className="mx-auto h-20 w-20 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="mb-6 mt-5 text-xl font-normal text-gray-500">
          {children}
        </h3>
      </div>
    </div>
  );
};

export default ErrorComponent;
