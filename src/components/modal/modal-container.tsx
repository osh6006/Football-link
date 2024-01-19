import * as React from "react";
import useThemeStore from "../../stores/theme-store";
import clsx from "clsx";

interface IModalContainerProps {
  children: React.ReactNode;
}

const ModalContainer: React.FunctionComponent<IModalContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={clsx(
        `mx-auto w-fit min-w-64 rounded-md p-5 shadow-lg`,
        theme === "light" && "bg-LightGreyLightBg",
        theme === "dark" && "bg-VeryDarkGreyDark",
      )}
    >
      test
    </div>
  );
};

export default ModalContainer;
