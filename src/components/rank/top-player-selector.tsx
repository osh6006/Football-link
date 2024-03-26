import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { PlayerSelectType } from "types/football";

interface ITopPlayerSelectorProps {
  type: PlayerSelectType;
  setType: (type: PlayerSelectType) => void;
}

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
        "flex cursor-pointer select-none items-center justify-center rounded-md border-2 px-3 py-3 sm:justify-between",
        selected && "border-Main text-Main",
      )}
    >
      {children}
      {selected && <CheckCircle2 className="hidden sm:block" />}
    </li>
  );
};

const TopPlayerSelector: React.FunctionComponent<ITopPlayerSelectorProps> = ({
  type,
  setType,
}) => {
  return (
    <ul className="grid w-full grid-cols-4 gap-3">
      <SelectItem
        onClick={() => setType("topscorers")}
        selected={type === "topscorers"}
      >
        득점
      </SelectItem>
      <SelectItem
        onClick={() => setType("topassists")}
        selected={type === "topassists"}
      >
        도움
      </SelectItem>
      <SelectItem
        onClick={() => setType("topyellowcards")}
        selected={type === "topyellowcards"}
      >
        경고
      </SelectItem>
      <SelectItem
        onClick={() => setType("topredcards")}
        selected={type === "topredcards"}
      >
        퇴장
      </SelectItem>
    </ul>
  );
};

export default TopPlayerSelector;
