import Sidebar from "./sidebar";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

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
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform -translate-x-[300px]"
      enterTo="transform"
      leave="transition ease-in duration-100"
      leaveFrom="transform"
      leaveTo="transform -translate-x-[300px]"
    >
      <div className="fixed inset-0 z-50 flex lg:hidden">
        <div ref={nodeRef} className="h-full">
          <Sidebar isMobile={true} onClose={onClose} />
        </div>
        <div onClick={onClose} className="flex-1"></div>
      </div>
    </Transition>
  );
};

export default MobileSideBar;
