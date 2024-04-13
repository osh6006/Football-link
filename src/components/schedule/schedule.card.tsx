import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { rapidFootballNextMatchesResponse } from "types/football";

interface IScheduleCardProps {
  scheduleItem: rapidFootballNextMatchesResponse;
}

const ScheduleCard: React.FunctionComponent<IScheduleCardProps> = ({
  scheduleItem,
}) => {
  const nav = useNavigate();

  return (
    <li
      key={scheduleItem.fixture.id}
      className="relative flex w-full flex-wrap items-center justify-between rounded-md border  border-MediumGrey px-4 py-2 md:gap-x-4"
    >
      <div className="absolute left-1 top-1 flex gap-x-4 md:static ">
        <time className="text-xs font-semibold sm:text-sm">
          {/* {isAll
            ? `${dayjs(scheduleItem.fixture.date).format("MM-DD HH:mm")}`
            : `${dayjs(scheduleItem.fixture.date).format("HH:mm")}`} */}
        </time>
        <span className="hidden text-sm ">
          {scheduleItem.fixture.venue.name}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-y-2 md:mt-0 md:flex-auto md:flex-row md:justify-between">
        <div className="flex  items-center gap-x-2">
          <div>
            <span className="flex items-center justify-center rounded-sm bg-green-500 px-[3px] text-xs leading-[20px] text-white">
              Home
            </span>
          </div>
          <div>{scheduleItem.teams.home.name}</div>
        </div>

        <div className="flex gap-x-3 font-semibold">
          <LazyLoadImage
            src={scheduleItem.teams.home.logo}
            alt="homeLogo"
            className="aspect-square w-8 max-w-8"
          />
          <span className="flex items-center gap-x-2 rounded-md bg-Main px-2 py-1 text-xs leading-[20px] text-White">
            <span>{scheduleItem.goals.home}</span>
            <span>{scheduleItem.fixture.status.long}</span>
            <span>{scheduleItem.goals.away}</span>
          </span>
          <LazyLoadImage
            src={scheduleItem.teams.away.logo}
            alt="homeLogo"
            className="aspect-square w-8 max-w-8"
          />
        </div>
        <div className="flex items-center">
          <div>{scheduleItem.teams.away.name}</div>
          <span className="ml-2 flex items-center justify-center rounded-sm bg-blue-500 px-[3px] text-xs leading-[20px] text-white">
            Away
          </span>
        </div>
      </div>
      <span className="absolute bottom-1 right-2 font-semibold sm:block md:static">{`${scheduleItem.league.round.at(
        -2,
      )}${scheduleItem.league.round.at(-1)}R`}</span>

      <button
        onClick={() => {
          nav(`/match-result/${scheduleItem.fixture.id}`);
        }}
        className="absolute right-1 top-1 rounded-md border border-MediumGrey px-2 py-[2px] text-xs uppercase transition-colors hover:bg-Main hover:text-White  sm:text-sm md:static"
      >
        result
      </button>
    </li>
  );
};

export default ScheduleCard;
