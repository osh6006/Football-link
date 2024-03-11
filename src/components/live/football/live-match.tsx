import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import { rapidFootballLiveMatchResponse } from "types/football";
import LiveDetail from "./live-detail";

interface ILiveMatchProps {
  liveInfo: rapidFootballLiveMatchResponse;
}

const TeamInfo = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <LazyLoadImage alt="teamLogo" height={80} width={80} src={imageUrl} />
      <h2 className="">{name}</h2>
    </div>
  );
};

const LiveMatch: React.FunctionComponent<ILiveMatchProps> = ({ liveInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  // data fetch MatchInfo
  const matchId = liveInfo.fixture.id;

  return (
    <li ref={nodeRef} className="flex items-center justify-between px-2 py-4">
      {/* home */}
      <TeamInfo
        imageUrl={liveInfo.teams.home.logo}
        name={liveInfo.teams.home.name}
      />

      {/* score */}
      <div></div>

      {/* away */}
      <TeamInfo
        imageUrl={liveInfo.teams.away.logo}
        name={liveInfo.teams.away.name}
      />

      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames={"select-season"}
        unmountOnExit
      >
        <LiveDetail ref={nodeRef} />
      </CSSTransition>
    </li>
  );
};

export default LiveMatch;
