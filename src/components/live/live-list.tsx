import LiveHeader from "./live-header";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useLeagueStore } from "stores/league-store";
import { useLiveMathesQuery } from "hooks/services/quries/use-live-query";

interface ILiveListProps {}

const LiveList: React.FunctionComponent<ILiveListProps> = () => {
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);

  const { data, isLoading, isError } = useLiveMathesQuery(
    selectedLeague?.leagueId!,
  );

  if (isLoading)
    return (
      <ComponentStatusContainer state="loading" height={750}>
        <Loading size="lg" />
      </ComponentStatusContainer>
    );

  if (isError)
    return (
      <ComponentStatusContainer state="error" height={750}>
        <h1>Something Error! 🤮</h1>
      </ComponentStatusContainer>
    );

  if (!data?.length)
    return (
      <ComponentStatusContainer state="loading" height={750}>
        <h1 className="text-2xl font-semibold text-gray-400">
          No live matches are currently in progress 😣
        </h1>
      </ComponentStatusContainer>
    );

  return (
    <ul className="space-y-2">
      {data?.map((el) => <LiveHeader key={el.fixture.id} liveInfo={el} />)}
    </ul>
  );
};

export default LiveList;
