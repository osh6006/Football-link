import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./modal.css";

interface IModalProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  title,
  desc,
  onClose,
  onConfirm,
  children,
}) => {
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={500}
        classNames="fade-modal"
        unmountOnExit
      >
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55"
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
