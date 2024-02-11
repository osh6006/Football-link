interface IScheduleContainerProps {
  children: React.ReactNode;
}

const ScheduleContainer: React.FunctionComponent<IScheduleContainerProps> = ({
  children,
}) => {
  return (
    <div
      className={
        "flex w-full flex-col items-center justify-center gap-y-2 rounded-md p-8 text-MediumGrey"
      }
    >
      {children}
    </div>
  );
};

export default ScheduleContainer;
