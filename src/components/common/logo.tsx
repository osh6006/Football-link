import { Link } from "react-router-dom";

interface ILogoProps {
  path: string;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ path }) => {
  return (
    <Link
      to={"/"}
      className="w-fit  cursor-pointer select-none text-xl font-bold uppercase text-Main sm:text-2xl"
    >
      Football Link
    </Link>
  );
};

export default Logo;
