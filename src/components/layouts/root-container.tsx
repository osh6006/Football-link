import clsx from "clsx";
import useThemeStore from "../../stores/theme-store";

interface IRootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FunctionComponent<IRootContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={clsx(
        `h-[100dvh] overflow-y-auto overflow-x-hidden text-MediumGrey `,
        theme === "light" ? "bg-LightGreyLightBg" : "bg-VeryDarkGreyDark",
      )}
    >
      {children}
    </div>
  );
};

export default RootContainer;
