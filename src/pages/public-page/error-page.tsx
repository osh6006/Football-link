import ErrorContainer from "components/layouts/error-container";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = () => {
  return (
    <ErrorContainer>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="absolute">
          <h1 className="my-2 text-3xl font-bold ">
            페이지를 찾을 수 없습니다.
          </h1>
          <p className="my-2 text-lg">다른 페이지 경로를 찾아주세요!</p>
        </div>
        <div>
          <LazyLoadImage src="https://i.ibb.co/ck1SGFJ/Group.png" alt="error" />
        </div>
        <div>
          <LazyLoadImage src="https://i.ibb.co/G9DC8S0/404-2.png" alt="error" />
        </div>
      </div>
    </ErrorContainer>
  );
};

export default ErrorPage;
