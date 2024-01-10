interface IAuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FunctionComponent<IAuthContainerProps> = ({
  children,
}) => {
  return (
    <main className="flex h-[100dvh] w-[100dvw] items-center justify-center bg-LightGreyLightBg px-4 sm:px-0">
      {children}
    </main>
  );
};

export default AuthContainer;
