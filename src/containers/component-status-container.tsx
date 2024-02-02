import clsx from "clsx";

interface IComponentStatusContainerProps {
  state: "error" | "loading";
  height: string;
  classNames?: string;
  children: React.ReactNode;
}

const ComponentStatusContainer: React.FunctionComponent<
  IComponentStatusContainerProps
> = ({ height, children, classNames, state }) => {
  return (
    <div
      className={clsx(
        "h flex  w-full items-center justify-center rounded-md p-2 text-xl",
        `min-h-[${height}px]`,
        state === "error" && "border-2 border-Red bg-RedHover/25",
        classNames,
      )}
    >
      {children}
    </div>
  );
};

export default ComponentStatusContainer;
