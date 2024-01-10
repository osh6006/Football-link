import Button from "../common/Button";

interface IStepOneProps {}

const StepOne: React.FunctionComponent<IStepOneProps> = (props) => {
  return (
    <>
      <h1 className="flex justify-between text-xl font-semibold">
        <p>스포링크에 오신 것을 환영합니다!</p>
        <p className="flex items-center gap-x-2 text-lg font-light text-LinesDark">
          1 <span className="text-sm">/</span>
          <strong className="text-Main">3</strong>
        </p>
      </h1>
      <p className="mt-16 text-sm">SNS 로그인 / 회원가입</p>
      <div className="mt-2 flex w-1/2 flex-col gap-y-2">
        <Button iconSrc="/svgs/google-icon.svg">Google</Button>
        <Button iconSrc="/svgs/github-icon.svg">Github</Button>
      </div>
    </>
  );
};

export default StepOne;
