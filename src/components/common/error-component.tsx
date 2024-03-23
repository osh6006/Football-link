import clsx from "clsx";
import { useTheme } from "stores/theme-store";

interface IErrorComponentProps {
  children: React.ReactNode;
}

const ErrorComponent: React.FunctionComponent<IErrorComponentProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-md text-MediumGrey shadow-md",
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      {children}
    </div>
  );
};

export default ErrorComponent;
