import * as React from "react";

interface IDetailTitleProps {
  children: React.ReactNode;
}

const DetailTitle: React.FunctionComponent<IDetailTitleProps> = ({
  children,
}) => {
  return <h1 className="text-xl font-bold">{children}</h1>;
};

export default DetailTitle;
