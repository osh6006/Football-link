import StepOne from "./step-one";

interface IAuthContentsProps {}

const AuthContents: React.FunctionComponent<IAuthContentsProps> = () => {
  const step = 1;
  return (
    <section className="relative h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
      <img
        src="/images/soccer-ball.png"
        alt="soccer-ball"
        className="absolute -bottom-24 -right-16 w-[200px]"
      />
      {step === 1 && <StepOne />}
    </section>
  );
};

export default AuthContents;
