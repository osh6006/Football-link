import clsx from "clsx";
import { Disclosure } from "@headlessui/react";

import LiveStat from "./live-stat";
import LineUpField from "./lineup-field";
import Tabs from "components/common/tabs";
import Avatar from "components/common/avatar";

import { rapidFootballLiveMatchResponse } from "types/football";

interface ILiveDetailProps {
  liveInfo: rapidFootballLiveMatchResponse;
}

const LiveDetail = ({ liveInfo }: ILiveDetailProps) => {
  return (
    <Disclosure.Panel>
      <div className="p-5">
        <Tabs defaultTab="event">
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
        </Tabs>
      </div>
    </Disclosure.Panel>
  );
};

export default LiveDetail;
