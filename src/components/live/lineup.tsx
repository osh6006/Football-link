import clsx from "clsx";

interface Player {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
}

interface ILineUpProps {
  lineUp: Player[];
  formation: string;
  isHome: boolean;
}

const LineUp: React.FunctionComponent<ILineUpProps> = ({
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
        <div
          className={clsx(
            "relative flex aspect-square h-12 w-12 items-center justify-center rounded-full ",
            isHome ? "bg-red-500" : "bg-blue-500",
          )}
        >
          {goalkeeper?.number}
        </div>
        <div>{goalkeeper?.name}</div>
      </div>,
    ];

    parseFormation.forEach((el) => {
      const newArr = Array.from({ length: el }, (el, i) => i + 1);

      const tempEL = (
        <div className="flex items-center justify-center gap-5">
          {isHome
            ? newArr
                .map((el) => {
                  const player = newLineUp.shift();
                  return (
                    <div
                      key={el}
                      className="flex flex-1 flex-col items-center justify-center truncate"
                    >
                      <div
                        className={clsx(
                          "relative flex aspect-square h-12 w-12 items-center justify-center rounded-full ",
                          isHome ? "bg-red-500" : "bg-blue-500",
                        )}
                      >
                        <span className="absolute">{player?.number}</span>
                      </div>
                      <div>{player?.name}</div>
                    </div>
                  );
                })
                .reverse()
            : newArr.map((el) => {
                const player = newLineUp.shift();
                return (
                  <div
                    key={el}
                    className="flex flex-1 flex-col items-center justify-center truncate"
                  >
                    <div
                      className={clsx(
                        "relative flex aspect-square h-12 w-12 items-center justify-center rounded-full ",
                        isHome ? "bg-red-500" : "bg-blue-500",
                      )}
                    >
                      <span className="absolute">{player?.number}</span>
                    </div>
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

  return <div className={`grid grid-cols-1 gap-4 sm:p-5`}>{renderGrid()}</div>;
};

export default LineUp;
