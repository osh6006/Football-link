import clsx from "clsx";

import useOutsideClick from "hooks/use-outside-click";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { CSSTransition } from "react-transition-group";

import "./season-selector-animation.css";

interface ISeasonSelectorProps {
  season: number;
  handleSetSeason: (season: number) => void;
  handleSeasonIncrese: () => void;
  handleSeasonDecrese: () => void;
}

const SeasonSelector: React.FunctionComponent<ISeasonSelectorProps> = ({
  season,
  handleSetSeason,
  handleSeasonIncrese,
  handleSeasonDecrese,
}) => {
  const thisYear = new Date().getFullYear() - 1;
  const firtYear = 2008;
  const selecte_years = Array.from(
    { length: thisYear - firtYear + 1 },
    (_, index) => firtYear + index,
  );

  const { isOpen, setIsOpen, ref, nodeRef } = useOutsideClick();

  return (
    <div className="flex items-center gap-2 py-1">
      <button
        className={clsx(
          "mt-1",
          season === firtYear ? "cursor-not-allowed" : "font-bold text-Main",
        )}
        onClick={() => handleSeasonDecrese()}
      >
        <ChevronLeftIcon size={30} />
      </button>
      <div
        role="button"
        ref={ref}
        className="relative select-none rounded-md border px-2 py-1 text-2xl shadow-sm transition-colors
       hover:border hover:text-Main"
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{`${season} - ${season + 1}`}</p>
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={100}
          classNames={"select-season"}
          unmountOnExit
        >
          <ul
            ref={nodeRef}
            role="grid"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={clsx(
              `absolute left-[50%] z-10 mt-4 grid w-[300px] -translate-x-[50%] grid-cols-3  items-center justify-center gap-2 overflow-hidden rounded-md bg-white
            p-2 text-DarkGrey shadow-lg focus:outline-none sm:text-sm md:w-[380px]`,
            )}
          >
            {selecte_years.map((el) => (
              <li
                key={el}
                role="gridcell"
                className="flex select-none items-center justify-center rounded-md border px-3  py-1
              text-lg transition-colors hover:text-Main
              "
                onClick={() => {
                  handleSetSeason(el);
                  setIsOpen(!isOpen);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </CSSTransition>
      </div>
      <button
        className={clsx(
          "mt-1",
          season === thisYear ? "cursor-not-allowed" : "font-bold text-Main",
        )}
        onClick={() => handleSeasonIncrese()}
      >
        <ChevronRightIcon size={30} />
      </button>
    </div>
  );
};

export default SeasonSelector;
