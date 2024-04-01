import Button from "components/common/button";
import AuthContainer from "../../components/layouts/auth-container";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import useAuth from "../../hooks/use-auth";

const AuthPage = () => {
  const { signIn } = useAuth();

  const handleGoogleBtn = async () => {
    signIn("google");
  };

  const handleGithubBtn = async () => {
    signIn("github");
  };

  return (
    <AuthContainer>
      <section className="relative h-fit w-full max-w-xl overflow-hidden rounded-md bg-White p-8 shadow-md">
        <div
          className="flex flex-col items-center text-xl font-semibold
        sm:flex-row sm:justify-between"
        >
          <h1 className="sm:tex-xl text-lg">
            Welcome to <strong className="text-Main">Football Link !</strong>
          </h1>
        </div>
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

        <LazyLoadComponent>
          <div
            role="img"
            className="absolute -bottom-28 -right-12 h-[200px] w-[200px] bg-[url('./assets/images/soccer-ball.png')] bg-cover"
          />
        </LazyLoadComponent>
      </section>
    </AuthContainer>
  );
};

export default AuthPage;
