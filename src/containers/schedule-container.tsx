interface IScheduleContainerProps {
  children: React.ReactNode;
}

const ScheduleContainer: React.FunctionComponent<IScheduleContainerProps> = ({
  children,
}) => {
  return (
    <div
      className={
        "flex h-[calc(100dvh-60px)] w-full flex-col items-center justify-center gap-y-2 rounded-md p-8 text-MediumGrey shadow-md"
      }
    >
      {children}
    </div>
  );
};

export default ScheduleContainer;
