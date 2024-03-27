import Tabs from "components/common/tabs";
import { rapidFootballLiveMatchResponse } from "types/football";
import Avatar from "components/common/avatar";
import clsx from "clsx";
import FootballLineUp from "./football-lineup";

interface IFootballLiveDetailProps {
  liveInfo: rapidFootballLiveMatchResponse;
}

const FootballLiveDetail = ({ liveInfo }: IFootballLiveDetailProps) => {
  // fetch

  // if (error)
  //   return (
  //     <ComponentStatusContainer height={500} state="loading">
  //       <div>Something Error!</div>
  //     </ComponentStatusContainer>
  //   );

  // if (loading)
  //   return (
  //     <ComponentStatusContainer height={500} state="loading">
  //       <Loading size="md" />
  //     </ComponentStatusContainer>
  //   );

  return (
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
          <div className=" rounded-md bg-green-400 p-4 text-white">
            <div className="relative grid w-full grid-cols-2 rounded-md border-4 border-white px-2 py-10">
              <FootballLineUp
                formation="4-2-3-1"
                lineUp={[
                  {
                    id: 6258,
                    name: "L. Pocrnjic",
                    number: 1,
                    pos: "G",
                    grid: "1:1",
                  },
                  {
                    id: 6261,
                    name: "L. Galeano",
                    number: 6,
                    pos: "D",
                    grid: "2:4",
                  },
                  {
                    id: 52701,
                    name: "M. Miers",
                    number: 19,
                    pos: "D",
                    grid: "2:3",
                  },
                  {
                    id: 6268,
                    name: "L. Villalba",
                    number: 23,
                    pos: "D",
                    grid: "2:2",
                  },
                  {
                    id: 6262,
                    name: "E. Iñíguez",
                    number: 21,
                    pos: "D",
                    grid: "2:1",
                  },
                  {
                    id: 6474,
                    name: "G. Gil",
                    number: 5,
                    pos: "M",
                    grid: "3:3",
                  },
                  {
                    id: 6269,
                    name: "F. Acevedo",
                    number: 8,
                    pos: "M",
                    grid: "3:2",
                  },
                  {
                    id: 6212,
                    name: "L. Maciel",
                    number: 33,
                    pos: "M",
                    grid: "3:1",
                  },
                  {
                    id: 6093,
                    name: "G. Verón",
                    number: 29,
                    pos: "F",
                    grid: "4:3",
                  },
                  {
                    id: 6126,
                    name: "F. Andrada",
                    number: 10,
                    pos: "F",
                    grid: "4:2",
                  },
                  {
                    id: 6561,
                    name: "N. Solís",
                    number: 7,
                    pos: "F",
                    grid: "4:1",
                  },
                ]}
                isHome
              />
              <div className="absolute left-1/2 top-0 h-full w-1 bg-white py-4 "></div>
              <div className="absolute"></div>
              <FootballLineUp
                formation="4-2-3-1"
                lineUp={[
                  {
                    id: 6258,
                    name: "L. Pocrnjic",
                    number: 1,
                    pos: "G",
                    grid: "1:1",
                  },
                  {
                    id: 6261,
                    name: "L. Galeano",
                    number: 6,
                    pos: "D",
                    grid: "2:4",
                  },
                  {
                    id: 52701,
                    name: "M. Miers",
                    number: 19,
                    pos: "D",
                    grid: "2:3",
                  },
                  {
                    id: 6268,
                    name: "L. Villalba",
                    number: 23,
                    pos: "D",
                    grid: "2:2",
                  },
                  {
                    id: 6262,
                    name: "E. Iñíguez",
                    number: 21,
                    pos: "D",
                    grid: "2:1",
                  },
                  {
                    id: 6474,
                    name: "G. Gil",
                    number: 5,
                    pos: "M",
                    grid: "3:3",
                  },
                  {
                    id: 6269,
                    name: "F. Acevedo",
                    number: 8,
                    pos: "M",
                    grid: "3:2",
                  },
                  {
                    id: 6212,
                    name: "L. Maciel",
                    number: 33,
                    pos: "M",
                    grid: "3:1",
                  },
                  {
                    id: 6093,
                    name: "G. Verón",
                    number: 29,
                    pos: "F",
                    grid: "4:3",
                  },
                  {
                    id: 6126,
                    name: "F. Andrada",
                    number: 10,
                    pos: "F",
                    grid: "4:2",
                  },
                  {
                    id: 6561,
                    name: "N. Solís",
                    number: 7,
                    pos: "F",
                    grid: "4:1",
                  },
                ]}
                isHome={false}
              />
            </div>
          </div>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={"stat"}>
          <div className="relative"></div>
        </Tabs.TabPanel>
      </Tabs>
    </div>
  );
};

export default FootballLiveDetail;
