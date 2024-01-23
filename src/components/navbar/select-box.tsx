import useThemeStore from "../../stores/theme-store";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import "./select-box.css";
import useOutsideClick from "../../hooks/use-outside-click";
import Loading from "../common/loading";
import Avatar from "components/common/avatar";

interface ISelectBoxProps<T> {
  name?: string | null;
  icon?: string | null;
  items: T[] | null | undefined;
  isLoading: boolean;
  setItem: (item: T) => void;
  moreAction?: () => void;
  isImg?: boolean;
}

const SelectBox: React.FunctionComponent<ISelectBoxProps<any>> = ({
  name,
  icon,
  items,
  isLoading,
  setItem,
  moreAction,
  isImg,
}) => {
  const { theme } = useThemeStore();
  const { isOpen, setIsOpen, ref, nodeRef } = useOutsideClick();

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-2" ref={ref}>
      {/* show side */}
      <button
        disabled={isLoading}
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
          {isLoading ? (
            <div className="mx-auto">
              <Loading size="sm" />
            </div>
          ) : (
            <>
              <span className="ml-2 block truncate">
                {isImg ? <Avatar size="sm" imgUrl={icon!} /> : icon}
              </span>
              <span className="ml-2 block truncate capitalize">
                {name || "Not Selected"}
              </span>
            </>
          )}
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
          absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-transparent text-base 
        shadow-lg focus:outline-none sm:text-sm
          
          `,
          )}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
          tabIndex={-1}
        >
          {items &&
            items?.map((el) => (
              <li
                key={el?.league?.id}
                onClick={() => {
                  setItem(el);
                  setIsOpen(!isOpen);
                }}
                className={clsx(
                  `
                    relative cursor-pointer select-none py-2 pl-3 pr-9 
                    transition-all hover:bg-MainHover hover:text-White active:scale-90
                    `,
                  theme === "light" && "bg-LightGreyLightBg",
                  theme === "dark" && "bg-VeryDarkGreyDark",
                )}
              >
                <div className="flex items-center">
                  <span>
                    {isImg ? (
                      <Avatar size="sm" imgUrl={el?.league?.logo} />
                    ) : (
                      el.icon
                    )}
                  </span>
                  <span className="ml-3 block truncate font-normal capitalize">
                    {el?.league?.name}
                  </span>
                </div>

                {name === el?.league?.name && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-Main ">
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
                )}
              </li>
            ))}
          {moreAction && (
            <li
              onClick={() => {
                setIsOpen(!isOpen);
                moreAction();
              }}
              className={clsx(
                `
                    relative cursor-pointer select-none py-2 pl-3 pr-9
                    transition-all hover:bg-MainHover hover:text-White active:scale-90
                    `,
                theme === "light" && "bg-LightGreyLightBg",
                theme === "dark" && "bg-VeryDarkGreyDark",
              )}
            >
              <div className="flex items-center justify-center gap-x-2">
                <span>리그 설정</span>
                <span className="block truncate font-normal">+</span>
              </div>
            </li>
          )}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default SelectBox;
