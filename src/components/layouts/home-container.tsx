interface IHomeContainerProps {
  children: React.ReactNode;
}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 p-5 text-MediumGrey 2xl:grid-cols-[2fr,1fr]">
      {children}
    </div>
  );
};

export default HomeContainer;
