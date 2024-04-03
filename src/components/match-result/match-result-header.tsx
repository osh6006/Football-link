import dayjs from "dayjs";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IMatchResultHeaderProps {
  date?: string;
  venue?: string;
  homeLogo?: string;
  homeName?: string;
  homeGoal?: number;
  awayLogo?: string;
  awayName?: string;
  awayGoal?: number;
}

const MatchResultHeader: React.FunctionComponent<IMatchResultHeaderProps> = ({
  date,
  venue,
  homeLogo,
  homeName,
  homeGoal,
  awayLogo,
  awayName,
  awayGoal,
}) => {
  return (
    <div className="flex items-center justify-between sm:justify-around">
      <div className="flex flex-col items-center gap-y-2">
        <LazyLoadImage
          src={homeLogo}
          alt="homelogo"
          className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 xl:h-28 xl:w-28"
        />
        <h2 className="truncate text-base font-semibold sm:text-xl">
          {homeName}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center text-sm sm:text-base ">
        <time>{dayjs(date).format("YYYY DD MM - HH:mm")}</time>
        <div className="flex items-center justify-center gap-x-4 text-3xl font-bold">
          <span className="">{homeGoal}</span>
          <p className="text-base">VS</p>
          <span className="">{awayGoal}</span>
        </div>
        <div className="truncate ">{venue}</div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <LazyLoadImage
          src={awayLogo}
          alt="homelogo"
          className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 xl:h-28 xl:w-28"
        />
        <h2 className="truncate text-base font-semibold sm:text-xl">
          {awayName}
        </h2>
      </div>
    </div>
  );
};

export default MatchResultHeader;
