import { useRef } from "react";

export default function useHorizontalScroll(scrollStepInPx: number) {
  const containerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: string) => {
    const container = containerRef.current;

    if (container) {
      const scrollAmount =
        direction === "left" ? -scrollStepInPx : scrollStepInPx;
      container.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (index: number) => {
    const container = containerRef.current;

    if (container) {
      // 해당 아이템의 id를 이용해서 앵커 생성
      const itemId = `item-${index}`;
      const item = container.children[index];
      item.id = itemId;

      const anchor = document.getElementById(itemId);
      if (anchor) {
        anchor.scrollIntoView({
          behavior: "smooth",
          block: "center", // 중앙으로 스크롤
        });
      }
    }
  };

  return { containerRef, handleScroll, handleItemClick };
}
