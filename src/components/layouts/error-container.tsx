import clsx from "clsx";
import useThemeStore from "stores/theme-store";

interface IErrorContainerProps {
  children: React.ReactNode;
}

const ErrorContainer: React.FunctionComponent<IErrorContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();
  return (
    <main
      className={clsx(
        "flex h-[100dvh] w-[100dvw] text-MediumGrey",
        theme === "light" ? "bg-White " : "bg-DarkGrey",
      )}
    >
      {children}
    </main>
  );
};

export default ErrorContainer;
