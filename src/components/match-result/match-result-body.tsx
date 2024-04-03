import { Tab } from "@headlessui/react";
import clsx from "clsx";
import MatchResultEvent from "./match-result-event";
import { rapidFootballTeamLeaguesResponse } from "types";
import MatchResultLineUp from "./match-result-lineup";
import MatchResultStat from "./match-result-stat";

interface IMatchResultBodyProps {
  matchInfo?: rapidFootballTeamLeaguesResponse;
}

const MatchResultBody: React.FunctionComponent<IMatchResultBodyProps> = ({
  matchInfo,
}) => {
  return (
    <Tab.Group>
      <Tab.List className="mt-10 flex items-center justify-between gap-x-2 sm:justify-around">
        <Tab
          className={({ selected }) =>
            clsx(
              "w-full rounded-md border-2 border-MediumGrey py-3 font-medium uppercase leading-5",
              "ring-MainHover  transition focus:outline-none focus:ring-4",
              selected
                ? "border-transparent bg-Main text-white shadow"
                : "text-MediumGrey hover:bg-Main hover:text-white",
            )
          }
        >
          Events
        </Tab>
        <Tab
          className={({ selected }) =>
            clsx(
              "w-full rounded-md border-2 border-MediumGrey py-3 font-medium uppercase leading-5",
              "ring-MainHover  transition focus:outline-none focus:ring-4",
              selected
                ? "border-transparent bg-Main text-white shadow"
                : "text-MediumGrey hover:bg-Main hover:text-white",
            )
          }
        >
          Line Up
        </Tab>
        <Tab
          className={({ selected }) =>
            clsx(
              "w-full rounded-md border-2 border-MediumGrey py-3 font-medium uppercase leading-5",
              "ring-MainHover  transition focus:outline-none focus:ring-4",
              selected
                ? "border-transparent bg-Main text-white shadow"
                : "text-MediumGrey hover:bg-Main hover:text-white",
            )
          }
        >
          Statistic
        </Tab>
      </Tab.List>
      <Tab.Panels className={"mt-10"}>
        <Tab.Panel>
          <MatchResultEvent
            events={matchInfo?.events}
            homeName={matchInfo?.teams.home.name}
            awayName={matchInfo?.teams.away.name}
          />
        </Tab.Panel>
        <Tab.Panel>
          <MatchResultLineUp
            players={matchInfo?.lineups}
            teams={matchInfo?.teams}
          />
        </Tab.Panel>
        <Tab.Panel>
          <MatchResultStat />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MatchResultBody;
