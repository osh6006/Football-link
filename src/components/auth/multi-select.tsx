import { useState } from "react";
import { Sport } from "../../types";
import { SportItems } from "../../services/fake/sports";
import clsx from "clsx";

interface IMultiSelectProps {
  items: Sport[];
}

const MultiSelect: React.FunctionComponent<IMultiSelectProps> = ({ items }) => {
  const [selectedItems, setSelectedItem] = useState<Sport[]>([]);

  const handleSelect = (sport: Sport) => {
    const findIdx = selectedItems.findIndex((el) => el.id === sport.id);
    if (findIdx !== -1) {
      setSelectedItem(selectedItems.filter((el) => el.id !== sport.id));
    } else {
      setSelectedItem((prevItems) => [...prevItems, sport]);
    }
  };

  return (
    <ul className="z-10 grid w-full grid-cols-2 items-center justify-between gap-4 sm:grid-cols-3 ">
      {SportItems.map((sport) => (
        <li
          key={sport.id}
          className={clsx(
            `flex cursor-pointer flex-nowrap items-center gap-x-2 rounded-sm border px-4 py-2 transition-colors 
            hover:bg-Main hover:text-white`,
            isIncludeInSelectedItem(selectedItems, sport.id) &&
              "bg-Main text-white",
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
