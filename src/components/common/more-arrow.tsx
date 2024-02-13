import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface IMoreArrowProps {
  path: string;
}

const MoreArrow: React.FunctionComponent<IMoreArrowProps> = ({ path }) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-x-1 text-lg font-normal transition-all hover:mr-4 hover:text-Main"
    >
      <span>더 보기</span>
      <ChevronRightIcon size={20} />
    </Link>
  );
};

export default MoreArrow;
