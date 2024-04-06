import clsx from "clsx";
import { Triangle } from "lucide-react";

interface ITopButtonProps {}

const TopButton: React.FunctionComponent<ITopButtonProps> = (props) => {
  // 페이지의 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    const container = document.querySelector(".main");
    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scrollToTop()}
      className={clsx(
        "fixed bottom-4 right-4 flex  items-center justify-center rounded-full bg-Main p-4 text-White shadow-md",
      )}
    >
      <Triangle size={20} />
    </button>
  );
};

export default TopButton;
