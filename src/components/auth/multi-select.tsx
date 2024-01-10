import { Sport } from "../../types";
import { SportItems } from "../../services/fake/sports";
import clsx from "clsx";

interface IMultiSelectProps {
  items: any[];
  handleSelect: (sport: any) => void;
}

const MultiSelect: React.FunctionComponent<IMultiSelectProps> = ({
  items,
  handleSelect,
}) => {
  return (
    <ul className="z-10 grid w-full grid-cols-2 items-center justify-between gap-4 sm:grid-cols-3 ">
      {SportItems.map((sport) => (
        <li
          key={sport.id}
          className={clsx(
            `flex cursor-pointer select-none flex-nowrap items-center gap-x-2 rounded-md border px-4 py-2 
            text-sm transition-colors hover:bg-Main hover:text-white
            sm:text-base
            `,
            isIncludeInSelectedItem(items, sport.id) && "bg-Main text-white",
          )}
          onClick={() => handleSelect(sport)}
        >
          <p>{sport.icon}</p>
          <p className="flex-1">{sport.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MultiSelect;

/**
 * 배열 안에 현재 아이디가 있는지 확인하는 함수
 * @param array Sport 타입
 * @param id 사용자가 선택한 ID
 * @returns boolean
 */
function isIncludeInSelectedItem(array: Sport[], id: number) {
  if (array.find((el) => el.id === id)) return true;
  return false;
}
