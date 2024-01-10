import Button from "../common/Button";

interface IStepOneProps {}

const StepOne: React.FunctionComponent<IStepOneProps> = (props) => {
  return (
    <>
      <p className="mt-16 text-sm">SNS 로그인 / 회원가입</p>
      <div className="mt-2 flex w-1/2 flex-col gap-y-2">
        <Button iconSrc="/svgs/google-icon.svg">Google</Button>
        <Button iconSrc="/svgs/github-icon.svg">Github</Button>
      </div>
    </>
  );
};

export default StepOne;
