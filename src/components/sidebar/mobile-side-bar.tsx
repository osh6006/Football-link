import Sidebar from "./sidebar";
import { CSSTransition } from "react-transition-group";

import "./sidebar-animation.css";
import { useEffect, useRef, useState } from "react";

interface IMobileSideBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSideBar: React.FunctionComponent<IMobileSideBarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(isSidebarOpen);
    }, 200);
  }, [isSidebarOpen, isOpen]);

  const onClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 200);
  };

  return (
    <CSSTransition
      ref={nodeRef}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames={"sidebar-menu"}
      unmountOnExit
    >
      <div className="fixed inset-0 flex lg:hidden">
        <div ref={nodeRef} className="h-full">
          <Sidebar isMobile={true} onClose={onClose} />
        </div>
        <div onClick={onClose} className="flex-1"></div>
      </div>
    </CSSTransition>
  );
};

export default MobileSideBar;
