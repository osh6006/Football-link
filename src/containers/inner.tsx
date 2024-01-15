import * as React from "react";

interface IInnerProps {
  children: React.ReactNode;
}

const Inner: React.FunctionComponent<IInnerProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Inner;
