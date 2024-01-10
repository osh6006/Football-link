import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

interface IAuthContentsProps {}

const AuthContents: React.FunctionComponent<IAuthContentsProps> = () => {
  const step = 2;
  return (
    <section className="relative h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
      <div className="flex justify-between text-xl font-semibold">
        <h1>
          <strong className="text-Main">SpoLink</strong>에 오신 것을 환영합니다!
        </h1>
        <p className="flex items-center gap-x-2 text-base font-semibold text-LinesDark">
          1 <span className="text-xs">/</span>
          <strong className="text-Main">3</strong>
        </p>
      </div>
      {/* {step === 1 && <StepOne />} */}
      {step === 2 && <StepTwo />}
      {/* {step === 3 && <StepThree />} */}
      <div
        className="absolute -bottom-24 -right-16 w-[200px]
        bg-[url('./assets/images/soccer-ball.png')]
        "
      />
    </section>
  );
};

export default AuthContents;
