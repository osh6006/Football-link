import clsx from "clsx";

import { useTheme } from "stores/theme-store";

interface IRootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FunctionComponent<IRootContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <div
      className={clsx(
        `h-[100dvh] overflow-y-auto overflow-x-hidden text-MediumGrey `,
        theme === "light" ? "bg-LightGreyLightBg" : "bg-VeryDarkGreyDark",
        "main",
      )}
    >
      {children}
    </div>
  );
};

export default RootContainer;
