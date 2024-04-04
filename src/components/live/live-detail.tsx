import clsx from "clsx";
import { Disclosure, Tab } from "@headlessui/react";

import LiveStat from "./live-stat";
import LineUpField from "./lineup-field";

import { rapidFootballLiveMatchResponse } from "types/football";
import MatchResultEvent from "components/match-result/match-result-event";

interface ILiveDetailProps {
  liveInfo: rapidFootballLiveMatchResponse;
}

const LiveDetail = ({ liveInfo }: ILiveDetailProps) => {
  return (
    <Disclosure.Panel>
      <div className="p-5">
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
                events={liveInfo?.events}
                homeName={liveInfo?.teams.home.name}
                awayName={liveInfo?.teams.away.name}
              />
            </Tab.Panel>
            <Tab.Panel>
              <LineUpField fixtureId={liveInfo.fixture.id} />
            </Tab.Panel>
            <Tab.Panel>
              <LiveStat />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* <Tabs defaultTab="event">
          <Tabs.TabContainer className="">
            <Tabs.Tab id="event" className="mx-2 rounded-md  border-2 p-5">
              Events
            </Tabs.Tab>
            <Tabs.Tab id="lineup" className="mx-2 rounded-md  border-2 p-5">
              LineUp
            </Tabs.Tab>
            <Tabs.Tab id="stat" className="mx-2 rounded-md border-2 p-5">
              Statistics
            </Tabs.Tab>
          </Tabs.TabContainer>
          <Tabs.TabPanel id={"event"}>
            {liveInfo.events.map((el) => (
              <div
                key={el.time + ""}
                className={clsx(
                  "flex items-center",
                  el.team.name === liveInfo.teams.away.name
                    ? "justify-end"
                    : "justify-start",
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-x-2",
                    el.team.name === liveInfo.teams.away.name
                      ? "flex-row-reverse"
                      : "",
                  )}
                >
                  <Avatar imgUrl={el.team.logo} size="md" />
                  <span>{el.player.name}</span>
                  <span>{el.time.elapsed + "`"}</span>
                  <span>{el.type}</span>
                  <span>{el.detail}</span>
                </div>
              </div>
            ))}
          </Tabs.TabPanel>
          <Tabs.TabPanel id={"lineup"}>
            <LineUpField fixtureId={liveInfo.fixture.id} />
          </Tabs.TabPanel>
          <Tabs.TabPanel id={"stat"}>
            <LiveStat />
          </Tabs.TabPanel>
        </Tabs> */}
      </div>
    </Disclosure.Panel>
  );
};

export default LiveDetail;
