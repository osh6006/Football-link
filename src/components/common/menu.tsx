import clsx from "clsx";
import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { CSSTransition } from "react-transition-group";

import "./season-selector-animation.css";

interface IMenuButtonProps {
  children: ReactNode;
  className?: string;
}
const MenuButton: React.FC<IMenuButtonProps> = ({ children, className }) => {
  const { isOpen, onOpen, onClose } = useContext(MenuContext)!;

  const handleToggle = (open: boolean) => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <button onClick={() => handleToggle(isOpen)} className={className}>
      {children}
    </button>
  );
};

interface IMenuContainerProps {
  children: ReactNode;
}

const MenuItemContainer: React.FC<IMenuContainerProps> = ({ children }) => {
  const { isOpen, nodeRef } = useContext(MenuContext)!;

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames={"select-season"}
      unmountOnExit
    >
      <ul ref={nodeRef}>{children}</ul>
    </CSSTransition>
  );
};

interface IMenuItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  className,
  onClick,
}) => {
  const { onClose } = useContext(MenuContext)!;

  return (
    <li
      className={clsx(
        "absolute w-full rounded-md bg-white px-4 py-2 shadow-md",
      )}
    >
      <button
        onClick={() => {
          if (onClick) {
            onClick();
          }
          onClose();
        }}
      >
        {children}
      </button>
    </li>
  );
};

interface IMenuProps {
  children: ReactNode;
}

interface IMenuComponent extends React.FC<IMenuProps> {
  MenuButton: React.FC<IMenuButtonProps>;
  MenuContainer: React.FC<IMenuContainerProps>;
  MenuItem: React.FC<IMenuItemProps>;
}

interface IMenuContextProps {
  isOpen: boolean;
  ref: RefObject<HTMLDivElement>;
  nodeRef: RefObject<any>;
  handleOutsideClick: (event: MouseEvent) => void;
  onClose: () => void;
  onOpen: () => void;
}

const MenuContext = createContext<IMenuContextProps | undefined>(undefined);

const Menu: IMenuComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const ref = useRef<HTMLDivElement>(null);
  const nodeRef = useRef(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <>
      <MenuContext.Provider
        value={{ isOpen, onClose, onOpen, ref, nodeRef, handleOutsideClick }}
      >
        <div className="relative " ref={ref}>
          {children}
        </div>
      </MenuContext.Provider>
    </>
  );
};

Menu.MenuItem = MenuItem;
Menu.MenuButton = MenuButton;
Menu.MenuContainer = MenuItemContainer;

export default Menu;
