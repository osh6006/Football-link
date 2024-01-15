import * as React from "react";

interface ISelectBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SelectBtn: React.FunctionComponent<ISelectBtnProps> = ({
  children,
  onClick,
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className=" transition-colors hover:bg-MainHover"
    ></div>
  );
};

export default SelectBtn;
