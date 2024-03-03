import { useEffect } from "react";
import useAuth from "../../hooks/use-auth";

import Button from "../common/button";
import { useAuthStepStore } from "stores/auth-step-store";
import { checkAuthSports } from "utils/auth";

interface IStepOneProps {}

const StepOne: React.FunctionComponent<IStepOneProps> = () => {
  const { signIn } = useAuth();
  const { setStep } = useAuthStepStore();

  useEffect(() => {
    const checkSession = async () => {
      const { auth, hasSports } = await checkAuthSports();
      if (auth && !hasSports) {
        setStep(2);
      }
    };

    checkSession();
  }, [setStep]);

  const handleGoogleBtn = async () => {
    signIn("google");
  };

  const handleGithubBtn = async () => {
    signIn("github");
  };

  return (
    <>
      <p className="mt-16 text-sm">
        SNS <strong className="text-Main">Sign In / Sign Up</strong>
      </p>
      <div className="mt-2 flex w-1/2 flex-col gap-y-2">
        <Button
          onClick={handleGoogleBtn}
          size="wide"
          iconSrc="/svgs/google-icon.svg"
          outline
        >
          Google
        </Button>
        <Button
          onClick={handleGithubBtn}
          size="wide"
          iconSrc="/svgs/github-icon.svg"
          outline
        >
          Github
        </Button>
      </div>
    </>
  );
};

export default StepOne;
