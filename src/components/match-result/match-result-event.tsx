import clsx from "clsx";
import Avatar from "components/common/avatar";
import ComponentStatusContainer from "components/layouts/component-status-container";

interface IMatchResultEventProps {
  events?: any[];
  homeName?: string;
  awayName?: string;
}

const MatchResultEvent: React.FunctionComponent<IMatchResultEventProps> = ({
  events,
  homeName,
  awayName,
}) => {
  if (events && events.length <= 0) {
    return (
      <ComponentStatusContainer state="loading" height={450}>
        <h1 className="text-2xl font-semibold text-gray-400">
          Not Event This Match 😣
        </h1>
      </ComponentStatusContainer>
    );
  }

  return (
    <ul className="space-y-2">
      {events?.map((el) => (
        <li
          key={el?.time + ""}
          className={clsx(
            "flex items-center rounded-sm border-2 border-MediumGrey p-2",
            el.team.name === homeName ? "justify-end" : "justify-start",
          )}
        >
          <div
            className={clsx(
              "flex items-center gap-x-2",
              el?.team.name === awayName ? "flex-row-reverse" : "",
            )}
          >
            <span>{el?.player.name}</span>
            <span className="font-bold">{el?.time.elapsed + "`"}</span>
            <span>{el?.type}</span>
            <span>{el?.detail}</span>
            <Avatar imgUrl={el?.team.logo} size="md" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MatchResultEvent;
