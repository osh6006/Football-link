interface ITitleProps {
  children: React.ReactNode;
}

const Title: React.FunctionComponent<ITitleProps> = ({ children }) => {
  return (
    <h2 className="flex justify-between text-xl font-bold text-MediumGrey">
      {children}
    </h2>
  );
};

export default Title;
