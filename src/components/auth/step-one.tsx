import useAuth from "../../hooks/use-auth";

import Button from "../common/button";

interface IStepOneProps {}

const StepOne: React.FunctionComponent<IStepOneProps> = () => {
  const { signIn } = useAuth();

  const handleGoogleBtn = async () => {
    signIn("google");
  };

  const handleGithubBtn = async () => {
    signIn("github");
  };

  return (
    <>
      <p className="mt-16 text-sm">SNS 로그인 / 회원가입</p>
      <div className="mt-2 flex w-1/2 flex-col gap-y-2">
        <Button
          onClick={handleGoogleBtn}
          size="wide"
          iconSrc="/svgs/google-icon.svg"
        >
          Google
        </Button>
        <Button
          onClick={handleGithubBtn}
          size="wide"
          iconSrc="/svgs/github-icon.svg"
        >
          Github
        </Button>
      </div>
    </>
  );
};

export default StepOne;
