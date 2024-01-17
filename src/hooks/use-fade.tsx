import { useEffect, useState } from "react";

export default function useFade(initial: boolean) {
  const [show, setShow] = useState<boolean>(initial);
  const [isVisible, setVisible] = useState<boolean>(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) {
      setVisible(false);
    }
  };

  const style = {
    animation: `${show ? "fadeIn" : "fadeOut"} .2s ease-in-out`,
  };

  // These props go on the fading DOM element
  const fadeProps = {
    style,
    onAnimationEnd,
  };

  return { isVisible, setShow, fadeProps };
}
