import * as React from "react";
import useThemeStore from "../../stores/theme-store";

interface IModalContainerProps {
  children: React.ReactNode;
}

const ModalContainer: React.FunctionComponent<IModalContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div className={`min-w-64 rounded-md bg-White p-5 shadow-lg`}>test</div>
  );
};

export default ModalContainer;
