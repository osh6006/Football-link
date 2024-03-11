interface IHomeContainerProps {
  children: React.ReactNode;
}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = ({
  children,
}) => {
  return (
    <div className="mx-auto flex max-w-[1580px] flex-col justify-between gap-x-8 p-5 min-[1800px]:flex-row">
      {children}
    </div>
  );
};

export default HomeContainer;
