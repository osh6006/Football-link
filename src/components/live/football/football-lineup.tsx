import * as React from "react";

interface Player {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
}

interface IFootballLineUpProps {
  lineUp: Player[];
  formation: string;
  isHome: boolean;
}

const FootballLineUp: React.FunctionComponent<IFootballLineUpProps> = ({
  formation,
  lineUp,
  isHome,
}) => {
  const parseFormation = formation.split("-").map(Number);

  const newLineUp = [...lineUp];
  const goalkeeper = newLineUp.shift();

  const renderGrid = () => {
    const grid: any[] = [
      <div className="flex flex-col items-center justify-center ">
        <div>{goalkeeper?.number}</div>
        <div>{goalkeeper?.name}</div>
      </div>,
    ];

    parseFormation.forEach((el) => {
      const newArr = Array.from({ length: el }, (el, i) => i + 1);

      const tempEL = (
        <div className="flex flex-col items-center justify-center gap-5">
          {newArr.map((el) => {
            const player = newLineUp.shift();
            return (
              <div className="flex flex-col items-center justify-center whitespace-nowrap">
                <div>{player?.number}</div>
                <div>{player?.name}</div>
              </div>
            );
          })}
        </div>
      );

      grid.push(tempEL);
    });

    return isHome ? grid : grid.reverse();
  };

  return (
    <div className={`grid grid-cols-${parseFormation.length + 1} gap-4`}>
      {renderGrid()}
    </div>
  );
};

export default FootballLineUp;
