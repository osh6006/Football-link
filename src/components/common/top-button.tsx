import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Triangle } from "lucide-react";
import { Fragment } from "react";

interface ITopButtonProps {
  isVisible: boolean;
}

const TopButton: React.FunctionComponent<ITopButtonProps> = ({ isVisible }) => {
  // 페이지의 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    const container = document.querySelector(".main");
    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Transition
      show={isVisible}
      as={Fragment}
      enterTo="opacity-100"
      enterFrom="opacity-0"
      enter="transition ease-in duration-100"
      leaveFrom="opacity-0"
      leaveTo="opacity-0"
    >
      <button
        onClick={() => scrollToTop()}
        className={clsx(
          "fixed bottom-4 right-4 flex  items-center justify-center rounded-full bg-Main p-4 text-White shadow-md",
        )}
      >
        <Triangle size={20} />
      </button>
    </Transition>
  );
};

export default TopButton;
