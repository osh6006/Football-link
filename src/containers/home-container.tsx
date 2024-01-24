interface IHomeContainerProps {
  children: React.ReactNode;
}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-2 p-5 text-MediumGrey xl:grid-cols-2">
      {children}
    </div>
  );
};

export default HomeContainer;
