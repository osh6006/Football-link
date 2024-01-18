import * as React from "react";
import { CSSTransition } from "react-transition-group";

interface IModalProps {
  title: string;
  desc: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void;
  nodeRef: React.MutableRefObject<null>;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  title,
  desc,
  onClose,
  onConfirm,
  children,
  nodeRef,
}) => {
  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      classNames={"modal"}
      unmountOnExit
      timeout={300}
    >
      <div
        onClick={() => onClose()}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      >
        {children}
      </div>
    </CSSTransition>
  );
};

export default Modal;
