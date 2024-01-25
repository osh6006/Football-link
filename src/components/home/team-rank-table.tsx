import { ISport } from "types";

interface ITeamRankTableProps {
  sports: ISport;
}

const TeamRankTable: React.FunctionComponent<ITeamRankTableProps> = ({
  sports,
}) => {
  if (sports.value === "foot-ball") {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
          <div key={el} className="">
            {el}
          </div>
        ))}
      </div>
    );
  }

  return <></>;
};

export default TeamRankTable;
