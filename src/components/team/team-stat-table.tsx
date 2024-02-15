interface IItem {
  name: string;
  value: string | number;
}

interface ITeamStatTableProps {
  items: IItem[];
}

const TeamStatTable: React.FunctionComponent<ITeamStatTableProps> = ({
  items,
}) => {
  return (
    <div className="mt-4 grid w-full grid-cols-4 gap-4 text-center xl:mt-0 xl:text-start">
      {items.map((el) => (
        <dl key={el.name}>
          <dt className="text-base text-slate-300">{el.name}</dt>
          <dd className="text-2xl">{el.value}</dd>
        </dl>
      ))}
    </div>
  );
};

export default TeamStatTable;
