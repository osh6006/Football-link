import * as React from "react";

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <h1 className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main">
      Spolink
    </h1>
  );
};

export default Logo;
