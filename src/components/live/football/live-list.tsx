import { useLiveMathesQuery } from "hooks/services/quries/use-football-query";
import useLeagueStore from "stores/league-store";
import LiveMatch from "./live-match";
import ComponentStatusContainer from "components/layouts/component-status-container";
import Loading from "components/common/loading";

interface ILiveListProps {}

const LiveList: React.FunctionComponent<ILiveListProps> = () => {
  const { selectedLeague } = useLeagueStore();

  const { data, isLoading, isError } = useLiveMathesQuery(
    selectedLeague?.rapid_football_league_id!,
  );

  if (isLoading)
    return (
      <ComponentStatusContainer state="loading" height="1000px">
        <Loading size="lg" />
      </ComponentStatusContainer>
    );
  if (isError)
    return (
      <ComponentStatusContainer state="error" height="1000px">
        <h1>Something Error!</h1>
      </ComponentStatusContainer>
    );

  return <ul className="">{data?.map((el) => <LiveMatch liveInfo={el} />)}</ul>;
};

export default LiveList;
