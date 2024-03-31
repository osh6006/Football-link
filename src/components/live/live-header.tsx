import clsx from "clsx";
import dayjs from "dayjs";

import LiveDetail from "./live-detail";
import { ChevronDown } from "lucide-react";
import { Disclosure, Transition } from "@headlessui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";

import { rapidFootballLiveMatchResponse } from "types/football";

dayjs.locale("ko");

interface ILiveHeaderProps {
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

const LiveHeader: React.FunctionComponent<ILiveHeaderProps> = ({
  liveInfo,
}) => {
  const theme = useTheme();

  return (
    <li>
      <Disclosure>
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclosure.Button
              className={clsx(
                "relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg px-2 py-4 transition-transform hover:scale-[1.005]",
                theme === "light"
                  ? "bg-LightGreyLightBg"
                  : "bg-VeryDarkGreyDark",
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
                  <strong className="mx-2 text-4xl">
                    {liveInfo.goals.home}
                  </strong>
                  <div className="flex flex-col items-center justify-center">
                    <p>{liveInfo.fixture.status.elapsed}</p>
                    <time>
                      {dayjs(liveInfo.fixture.date).format("YY.MM.DD HH:mm")}
                    </time>
                    <p>{liveInfo.fixture.venue.city}</p>
                  </div>
                  <strong className="mx-2 text-4xl">
                    {liveInfo.goals.away}
                  </strong>
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
                  open ? "rotate-180" : "",
                )}
              >
                <ChevronDown size={30} />
              </span>
            </Disclosure.Button>
            <div>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <LiveDetail liveInfo={liveInfo} />
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </li>
  );
};

export default LiveHeader;
