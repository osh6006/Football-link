import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface ITopPlayerSelectorProps {}

interface ISelectItem {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const SelectItem = ({ children, selected, onClick }: ISelectItem) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        "flex cursor-pointer select-none items-center justify-center rounded-md border-2  px-3 py-3 sm:justify-between",
        selected ? "border-Main text-Main" : "border-MediumGrey",
      )}
    >
      {children}
      {selected ? <CheckCircle2 className="hidden sm:block" /> : null}
    </li>
  );
};

const TopPlayerSelector: React.FunctionComponent<
  ITopPlayerSelectorProps
> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabName = searchParams.get("tab") || "player";
  const typeName = searchParams.get("playerType") || "topscorers";

  return (
    <ul className="grid w-full grid-cols-4 gap-3">
      <SelectItem
        onClick={() => setSearchParams(`?tab=${tabName}&playerType=topscorers`)}
        selected={typeName === "topscorers"}
      >
        Goal
      </SelectItem>
      <SelectItem
        onClick={() => setSearchParams(`?tab=${tabName}&playerType=topassists`)}
        selected={typeName === "topassists"}
      >
        Assist
      </SelectItem>
      <SelectItem
        onClick={() =>
          setSearchParams(`?tab=${tabName}&playerType=topyellowcards`)
        }
        selected={typeName === "topyellowcards"}
      >
        Yellow Card
      </SelectItem>
      <SelectItem
        onClick={() =>
          setSearchParams(`?tab=${tabName}&playerType=topredcards`)
        }
        selected={typeName === "topredcards"}
      >
        Red Card
      </SelectItem>
    </ul>
  );
};

export default TopPlayerSelector;
