import { useAuthStepStore } from "../../stores/auth-step-store";

import AuthContainer from "../../components/layouts/auth-container";
import StepOne from "../../components/auth/step-one";
import StepThree from "../../components/auth/step-three";
import StepTwo from "../../components/auth/step-two";

const AuthPage = () => {
  const { step } = useAuthStepStore();

  return (
    <AuthContainer>
      <section className="relative h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
        <div
          className="flex flex-col items-center text-xl font-semibold
        sm:flex-row sm:justify-between"
        >
          <h1 className="sm:tex-xl text-lg">
            <strong className="text-Main">SpoLink</strong>에 오신 것을
            환영합니다!
          </h1>
        </div>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        <div
          role="img"
          className="absolute -bottom-28 -right-12 h-[200px] w-[200px] bg-[url('./assets/images/soccer-ball.png')] bg-cover"
        />
      </section>
    </AuthContainer>
  );
};

export default AuthPage;
