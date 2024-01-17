import { useCallback, useEffect, useRef, useState } from "react";
import useThemeStore from "../../stores/theme-store";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import "./select-box.css";

interface ISelectBoxProps<T> {
  label: string;
  icon?: string;
  items?: T[];
}

const SelectBox: React.FunctionComponent<ISelectBoxProps<any>> = ({
  label,
  icon,
  items,
}) => {
  const { theme } = useThemeStore();
  const listboxRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        listboxRef.current &&
        !listboxRef.current.contains(event.target as Node)
      ) {
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
    <div className="relative mt-2" ref={listboxRef}>
      {/* show side */}
      <button
        onClick={toggleSelectBox}
        type="button"
        className={clsx(
          `
        relative w-full cursor-pointer rounded-md py-1.5 pl-3 pr-10 text-left text-MediumGrey shadow-sm 
        ring-1 ring-inset ring-Main focus:outline-none focus:ring-2 focus:ring-Main
        sm:text-sm sm:leading-6 
        `,
          theme === "light" && "bg-LightGreyLightBg",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span className="flex items-center">
          <span className="ml-2 block truncate">{icon}</span>
          <span className="ml-2 block truncate">{label}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* hidden side */}
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames={"select-box"}
        unmountOnExit
      >
        <ul
          ref={nodeRef}
          className={clsx(
            `
          t absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-transparent text-base 
        shadow-lg focus:outline-none sm:text-sm
          
          `,
          )}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          tabIndex={-1}
        >
          <li
            className={clsx(
              `
          relative cursor-pointer select-none py-2 pl-3 pr-9
          transition-colors hover:bg-MainHover hover:text-White
          `,
              theme === "light" && "bg-LightGreyLightBg",
              theme === "dark" && "bg-VeryDarkGreyDark",
            )}
          >
            <div className="flex items-center">
              <span>icon</span>
              <span className="ml-3 block truncate font-normal">축구</span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-Main">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </li>
          <li
            className={clsx(
              `
          relative cursor-pointer select-none py-2 pl-3 pr-9
          transition-colors hover:bg-MainHover hover:text-White
          `,
              theme === "light" && "bg-LightGreyLightBg",
              theme === "dark" && "bg-VeryDarkGreyDark",
            )}
          >
            <div className="flex items-center">
              <span>icon</span>
              <span className="ml-3 block truncate font-normal">
                Wade Cooper
              </span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-Main">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default SelectBox;
