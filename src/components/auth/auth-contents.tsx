import { useAuthStore } from "../../stores/auth-store";

import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";

interface IAuthContentsProps {}

const AuthContents: React.FunctionComponent<IAuthContentsProps> = () => {
  const { step } = useAuthStore();
  return (
    <section className="relative h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
      <div
        className="flex flex-col items-center text-xl font-semibold
        sm:flex-row sm:justify-between"
      >
        <h1 className="text-lg sm:text-xl">
          <strong className="text-Main">SpoLink</strong>에 오신 것을 환영합니다!
        </h1>
        <p
          className="mt-2 flex items-center gap-x-2 text-base font-semibold text-LinesDark
          sm:mt-0"
        >
          {step}
          <span className="text-xs">/</span>
          <strong className="text-Main">3</strong>
        </p>
      </div>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      <div
        role="img"
        className="absolute -bottom-28 -right-12 h-[200px] w-[200px] bg-[url('./assets/images/soccer-ball.png')] bg-cover"
      />
    </section>
  );
};

export default AuthContents;
