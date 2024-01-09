import Button from "../common/Button";

type Props = {};

const AuthContents = (props: Props) => {
  return (
    <section className="relative mt-10 h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
      <img
        src="/images/soccer-ball.png"
        alt="soccer-ball"
        className="absolute -bottom-24 -right-16 w-[200px]"
      />
      <h1 className="text-xl font-semibold">
        풋볼 월드에 오신 것을 환영합니다!
      </h1>
      <p className="mt-16 text-sm">SNS 로그인 / 회원가입</p>
      <div className="mt-2 flex w-1/2 flex-col gap-y-2">
        <Button iconSrc="/svgs/google-icon.svg">Google</Button>
        <Button iconSrc="/svgs/github-icon.svg">Github</Button>
      </div>
    </section>
  );
};

export default AuthContents;
