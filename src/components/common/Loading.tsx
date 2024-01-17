import clsx from "clsx";
import { Loader2Icon } from "lucide-react";

const sizeObj = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

interface ILoadingProps {
  size: "sm" | "md" | "lg";
}

const Loading: React.FunctionComponent<ILoadingProps> = ({ size = "md" }) => {
  return (
    <>
      <Loader2Icon className={clsx(`animate-spin text-Main`, sizeObj[size])} />
    </>
  );
};

export default Loading;
