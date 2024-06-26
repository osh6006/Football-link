interface IItem {
  name: string;
  value: string | number | null | undefined;
}

interface IStatTableProps {
  items: IItem[];
}

const StatTable: React.FunctionComponent<IStatTableProps> = ({ items }) => {
  return (
    <div className="flex w-full flex-col gap-x-4 px-2 text-xl xl:w-fit xl:flex-1 xl:flex-col">
      <div
        className="py-2 text-center font-semibold after:my-2
              after:hidden after:h-[3px] after:w-[15px] after:bg-White after:content-[''] xl:text-start
              after:xl:block"
      >
        23/24 Season
      </div>
      <div className="mt-4 grid w-full grid-cols-4 gap-4 text-center xl:mt-0 xl:text-start">
        {items.map((el, i) => (
          <dl key={i}>
            <dt className="text-base text-slate-300">{el.name}</dt>
            <dd className="text:lg sm:text-xl ">{el.value || 0}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default StatTable;
