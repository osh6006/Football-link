import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import { rapidFootballLiveMatchResponse } from "types/football";
import LiveDetail from "./live-detail";
import clsx from "clsx";
import useThemeStore from "stores/theme-store";
import { ChevronDown } from "lucide-react";

import "./live-detail-animation.css";

import dayjs from "dayjs";
dayjs.locale("ko");

interface ILiveMatchProps {
  liveInfo: rapidFootballLiveMatchResponse;
}

const TeamInfo = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <LazyLoadImage alt="teamLogo" height={80} width={80} src={imageUrl} />
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
};

const LiveMatch: React.FunctionComponent<ILiveMatchProps> = ({ liveInfo }) => {
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <li>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "relative flex cursor-pointer flex-col items-center justify-center rounded-lg px-2 py-4 transition-transform hover:scale-[1.005]",
          theme === "light" ? "bg-LightGreyLightBg" : "bg-VeryDarkGreyDark",
        )}
      >
        {/* home */}
        <div className="flex w-full max-w-[1000px] items-center justify-around gap-x-4">
          <TeamInfo
            imageUrl={liveInfo.teams.home.logo}
            name={liveInfo.teams.home.name}
          />

          {/* score */}
          <div className="flex items-center justify-between gap-x-4">
            <strong className="mx-2 text-4xl">{liveInfo.goals.home}</strong>
            <div className="flex flex-col items-center justify-center">
              <p>{liveInfo.fixture.status.elapsed}</p>
              <time>
                {dayjs(liveInfo.fixture.date).format("YY.MM.DD HH:mm")}
              </time>
              <p>{liveInfo.fixture.venue.city}</p>
            </div>
            <strong className="mx-2 text-4xl">{liveInfo.goals.away}</strong>
          </div>

          {/* away */}
          <TeamInfo
            imageUrl={liveInfo.teams.away.logo}
            name={liveInfo.teams.away.name}
          />
        </div>
        <span
          className={clsx(
            "absolute right-10 top-1/2 -translate-y-1/2 transition-transform",
            isOpen ? "rotate-180" : "",
          )}
        >
          <ChevronDown size={30} />
        </span>
      </div>
      <div ref={nodeRef}>
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={300}
          classNames={"live-detail"}
          unmountOnExit
        >
          <LiveDetail />
        </CSSTransition>
      </div>
    </li>
  );
};

export default LiveMatch;
