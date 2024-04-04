import * as React from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
  path: string;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ path }) => {
  return (
    <Link
      to={"/"}
      className="w-fit cursor-pointer select-none text-2xl font-semibold uppercase text-Main"
    >
      Football Link
    </Link>
  );
};

export default Logo;
