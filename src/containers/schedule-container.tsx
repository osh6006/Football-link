interface IScheduleContainerProps {
  children: React.ReactNode;
}

const ScheduleContainer: React.FunctionComponent<IScheduleContainerProps> = ({
  children,
}) => {
  return (
    <div className={"rounded-md p-4 text-MediumGrey sm:p-8"}>{children}</div>
  );
};

export default ScheduleContainer;
