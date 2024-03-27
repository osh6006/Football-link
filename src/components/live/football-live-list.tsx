import FootballLiveHeader from "./football-live-header";

import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";
import { useLiveMathesQuery } from "hooks/services/quries/use-live-query";
import { useLeagueStore } from "stores/league-store";

interface IFootballLiveListProps {}

const FootballLiveList: React.FunctionComponent<
  IFootballLiveListProps
> = () => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  // const { data, isLoading, isError } = useLiveMathesQuery(
  //   selectedLeague?.leagueId!,
  // );

  // if (isLoading)
  //   return (
  //     <ComponentStatusContainer state="loading" height={750}>
  //       <Loading size="lg" />
  //     </ComponentStatusContainer>
  //   );

  // if (isError)
  //   return (
  //     <ComponentStatusContainer state="error" height={750}>
  //       <h1>Something Error! 🤮</h1>
  //     </ComponentStatusContainer>
  //   );

  // if (!data?.length)
  //   return (
  //     <ComponentStatusContainer state="loading" height={750}>
  //       <h1 className="text-2xl font-semibold text-gray-400">
  //         No live matches are currently in progress 😣
  //       </h1>
  //     </ComponentStatusContainer>
  //   );

  return (
    <ul className="space-y-2">
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <FootballLiveHeader
          key={el}
          liveInfo={{
            fixture: {
              id: 1159349,
              referee: null,
              timezone: "UTC",
              date: "2024-03-11T01:30:00+00:00",
              timestamp: 1710120600,

              periods: {
                first: 1710120600,
                second: 1710124200,
              },
              venue: {
                id: 791,
                name: "Estadio Municipal Ceibeño Nilmo Edwards",
                city: "La Ceiba",
              },
              status: {
                long: "Second Half",
                short: "2H",
                elapsed: 80,
              },
            },
            league: {
              id: 234,
              name: "Liga Nacional",
              country: "Honduras",
              logo: "https://media.api-sports.io/football/leagues/234.png",
              flag: "https://media.api-sports.io/flags/hn.svg",
              season: 2023,
              round: "Clausura - 10",
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: null,
                away: null,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
            goals: {
              home: 1,
              away: 0,
            },
            teams: {
              home: {
                id: 11682,
                name: "Victoria",
                logo: "https://media.api-sports.io/football/teams/11682.png",
                winner: true,
              },
              away: {
                id: 1052,
                name: "CD Real Sociedad",
                logo: "https://media.api-sports.io/football/teams/1052.png",
                winner: false,
              },
            },
            events: [
              {
                time: {
                  elapsed: 14,
                  extra: null,
                },
                team: {
                  id: 21009,
                  name: "CD Real Sociedad",
                  logo: "https://media.api-sports.io/football/teams/463.png",
                },
                player: {
                  id: null,
                  name: "D. Bitusupov",
                },
                assist: {
                  id: null,
                  name: null,
                },
                type: "Goal",
                detail: "Normal Goal",
                comments: null,
              },
              {
                time: {
                  elapsed: 14,
                  extra: null,
                },
                team: {
                  id: 21009,
                  name: "Victoria",
                  logo: "https://media.api-sports.io/football/teams/463.png",
                },
                player: {
                  id: null,
                  name: "D. Bitusupov",
                },
                assist: {
                  id: null,
                  name: null,
                },
                type: "Goal",
                detail: "Normal Goal",
                comments: null,
              },
            ],
          }}
        />
      ))}
    </ul>
  );
};

export default FootballLiveList;
