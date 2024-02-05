import * as React from "react";

interface IScheduleContainerProps {
  children: React.ReactNode;
}

const ScheduleContainer: React.FunctionComponent<IScheduleContainerProps> = ({
  children,
}) => {
  return <div className="flex">{children}</div>;
};

export default ScheduleContainer;
