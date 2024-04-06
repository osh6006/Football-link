import ComponentStatusContainer from "components/layouts/component-status-container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMatchResultStatistic } from "types";

interface IMatchResultStatProps {
  stat?: IMatchResultStatistic[];
}

const MatchResultStat: React.FunctionComponent<IMatchResultStatProps> = ({
  stat,
}) => {
  const homeStat = stat ? stat[0] : null;
  const awayStat = stat ? stat[1] : null;

  if (!stat || stat?.length <= 0) {
    return (
      <ComponentStatusContainer state="loading" height={400}>
        Statistics data for that match does not exist on the server. 🤔
      </ComponentStatusContainer>
    );
  }

  return (
    <div className="grid grid-cols-1 divide-y-2 divide-MediumGrey border-2 border-MediumGrey sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 ">
      <div>
        <div className="flex items-center justify-center gap-x-2 border-b-2  border-MediumGrey p-2.5 text-center text-lg font-semibold">
          <LazyLoadImage
            src={homeStat?.team.logo}
            alt="homeLogo"
            className="w-10"
          />
          {homeStat?.team.name}
        </div>
        <ul className="divide-y-2 divide-MediumGrey ">
          {homeStat?.statistics?.map((el, i) => (
            <li className="flex items-center gap-x-4 " key={i}>
              <dt className="flex flex-1 items-center justify-center border-r-2 border-MediumGrey p-2.5">
                {el.type || "-"}
              </dt>
              <dd className="flex flex-1 items-center justify-center gap-x-2 font-semibold">
                {el.value || "-"}
              </dd>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-center gap-x-2 border-b-2  border-MediumGrey p-2.5 text-center text-lg font-semibold">
          <LazyLoadImage
            src={awayStat?.team.logo}
            alt="homeLogo"
            className="w-10"
          />
          {awayStat?.team.name}
        </div>
        <ul className="divide-y-2 divide-MediumGrey ">
          {awayStat?.statistics?.map((el, i) => (
            <li className="flex items-center gap-x-4 " key={i}>
              <dt className="flex flex-1 items-center justify-center border-r-2 border-MediumGrey p-2.5">
                {el.type || "-"}
              </dt>
              <dd className="flex flex-1 items-center justify-center gap-x-2 font-semibold">
                {el.value || "-"}
              </dd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchResultStat;
