type Props = {};

const AuthContents = (props: Props) => {
  return (
    <section className="relative mt-10 h-fit w-full max-w-2xl overflow-hidden rounded-md bg-White p-8 shadow-md">
      <img
        src="/images/soccer-ball.png"
        alt="soccer-ball"
        className="absolute w-[200px] -translate-x-24 -translate-y-24 "
      />
      <h1 className="mt-28 text-xl font-semibold">
        Football World에 오신 것을 환영합니다!
      </h1>
      <p className="mt-28">SNS 로그인 / 회원가입</p>
    </section>
  );
};

export default AuthContents;
