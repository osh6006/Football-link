import LineUp from "components/live/lineup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMatchResultLineUp, IMatchResultTeams } from "types";

interface IMatchResultLineUpProps {
  teams?: IMatchResultTeams;
  players?: IMatchResultLineUp[];
}

const MatchResultLineUp: React.FunctionComponent<IMatchResultLineUpProps> = ({
  players,
  teams,
}) => {
  const homeData = players ? players[0] : null;
  const homeStartXI = homeData?.startXI?.map((el) => el.player) || [];
  const homeSubstitutes = homeData?.substitutes
    .map((el) => el.player)
    .sort((a, b) => {
      const nameA = a.pos.toUpperCase(); // 대소문자를 구분하지 않고 정렬하기 위해 대문자로 변환
      const nameB = b.pos.toUpperCase();

      if (nameA.startsWith("G") && !nameB.startsWith("G")) {
        return -1; // a를 b보다 앞에 위치
      }
      if (!nameA.startsWith("G") && nameB.startsWith("G")) {
        return 1; // b를 a보다 앞에 위치
      }
      if (nameA < nameB) {
        return -1; // a를 b보다 앞에 위치
      }
      if (nameA > nameB) {
        return 1; // b를 a보다 앞에 위치
      }
      return 0; // 순서 변경 없음
    });

  const awayData = players ? players[1] : null;
  const awayStartXI = awayData?.startXI?.map((el) => el.player) || [];
  const awaySubstitutes = awayData?.substitutes
    .map((el) => el.player)
    .sort((a, b) => {
      const nameA = a.pos.toUpperCase(); // 대소문자를 구분하지 않고 정렬하기 위해 대문자로 변환
      const nameB = b.pos.toUpperCase();

      if (nameA.startsWith("G") && !nameB.startsWith("G")) {
        return -1; // a를 b보다 앞에 위치
      }
      if (!nameA.startsWith("G") && nameB.startsWith("G")) {
        return 1; // b를 a보다 앞에 위치
      }

      if (nameA < nameB) {
        return -1; // a를 b보다 앞에 위치
      }
      if (nameA > nameB) {
        return 1; // b를 a보다 앞에 위치
      }
      return 0; // 순서 변경 없음
    });

  return (
    <div className="">
      <h2 className="my-2 text-xl font-bold">Start XI</h2>
      <div className="rounded-md bg-green-400 p-4  text-white">
        <div className="relative grid w-full grid-cols-1 divide-y-2 rounded-md border-4 border-white">
          <LineUp
            formation={homeData?.formation || ""}
            lineUp={homeStartXI}
            isHome
          />
          <LineUp
            formation={awayData?.formation || ""}
            lineUp={awayStartXI}
            isHome={false}
          />
        </div>
      </div>
      <h2 className="my-2 text-xl font-bold">Substitutes</h2>
      <div className="grid grid-cols-1 divide-y-2 divide-MediumGrey border-2 border-MediumGrey sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 ">
        <div>
          <div className="flex items-center justify-center gap-x-2 border-b-2  border-MediumGrey p-2.5 text-center text-lg font-semibold">
            <LazyLoadImage
              src={teams?.home.logo}
              alt="homeLogo"
              className="w-10"
            />
            {teams?.home.name}
          </div>
          <ul className="divide-y-2 divide-MediumGrey ">
            {homeSubstitutes?.map((el) => (
              <li className="flex items-center gap-x-4 " key={el.id}>
                <dt className="flex basis-11 items-center justify-center border-r-2 border-MediumGrey p-2.5">
                  {el.pos}
                </dt>
                <dd className="flex flex-1 items-center gap-x-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-Red text-White">
                    {el.number}
                  </span>
                  {el.name}
                </dd>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center gap-x-2 border-b-2 border-MediumGrey p-2.5 text-center text-lg font-semibold">
            <LazyLoadImage
              src={teams?.away.logo}
              alt="awayLogo"
              className="w-10"
            />
            {teams?.away.name}
          </div>
          <ul className="divide-y-2 divide-MediumGrey">
            {awaySubstitutes?.map((el) => (
              <li className="flex items-center gap-x-4 " key={el.id}>
                <dt className="flex basis-11 items-center justify-center border-r-2 border-MediumGrey p-2.5">
                  {el.pos}
                </dt>
                <dd className="flex flex-1 items-center gap-x-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-White">
                    {el.number}
                  </span>
                  {el.name}
                </dd>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MatchResultLineUp;
