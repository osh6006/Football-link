import DetailTitle from "components/common/detail-title";
import { usePlayerRoot } from "./player-root";

interface IPlayerInfoProps {}

const DL = ({ children }: { children: React.ReactNode }) => {
  return (
    <dl className="flex flex-col items-center justify-center">{children}</dl>
  );
};

const DT = ({ children }: { children: React.ReactNode }) => {
  return <dt className="text-center text-xs">{children}</dt>;
};

const DD = ({ children }: { children: React.ReactNode }) => {
  return <dd className="text-lg font-semibold">{children}</dd>;
};

const PlayerInfo: React.FunctionComponent<IPlayerInfoProps> = () => {
  const { playerInfo } = usePlayerRoot();
  console.log(playerInfo);

  return (
    <div className="space-y-4">
      <section>
        <DetailTitle>Player Info</DetailTitle>
        <div className="mt-4 grid w-full grid-cols-3 gap-4 rounded-md border sm:py-6">
          <DL>
            <DT>Age</DT>
            <DD>
              <p>{playerInfo.player.age}</p>
            </DD>
          </DL>
          <DL>
            <DT>Country</DT>
            <DD>
              <p>{playerInfo.player.nationality}</p>
            </DD>
          </DL>
          <DL>
            <DT>Country</DT>
            <DD>
              <p>{playerInfo.player.birth.place}</p>
            </DD>
          </DL>
          <DL>
            <DT>Height</DT>
            <DD>
              <p>{playerInfo.player.height}</p>
            </DD>
          </DL>
          <DL>
            <DT>Weight</DT>
            <DD>
              <p>{playerInfo.player.weight}</p>
            </DD>
          </DL>
          <DL>
            <DT>Injured</DT>
            <DD>
              <p>{playerInfo.player.injured ? "Injured" : "Not Injured"}</p>
            </DD>
          </DL>
        </div>
      </section>
      <section className="space-y-4">
        <DetailTitle>Player Stat</DetailTitle>
        {playerInfo.statistics.map((el) => (
          <div
            key={el.league.id}
            className="w-full space-y-2 rounded-md border p-4 sm:space-y-4 sm:px-6 sm:py-4"
          >
            <span className="left-3 top-2 font-semibold">{el.league.name}</span>
            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row sm:gap-y-0">
              <span className="h-40 w-full rounded-md bg-white p-4 sm:h-auto sm:w-[150px]">
                <div
                  className="h-full w-full  bg-contain bg-center"
                  style={{
                    background: `url(${el.league.logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              </span>
              <div className="grid flex-1 grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
                <DL>
                  <DT>
                    Games
                    <div>minutes / played</div>
                  </DT>
                  <DD>
                    <p>
                      {el.games?.minutes || 0} / {el.games?.appearences || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>Rating</DT>
                  <DD>
                    <p
                      className={`${
                        Number(el.games?.rating) > 8 && "text-Red"
                      }`}
                    >
                      {Number(el.games?.rating).toFixed(2) || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>Goals</DT>
                  <DD>
                    <p>{el.goals?.total || 0}</p>
                  </DD>
                </DL>
                <DL>
                  <DT>Assists</DT>
                  <DD>
                    <p>{el.goals?.assists || 0}</p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Shot
                    <div>onTarget / Total</div>
                  </DT>
                  <DD>
                    <p>
                      {el.shots?.on || 0} / {el.shots?.total || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Pass
                    <div>key / total</div>
                  </DT>
                  <DD>
                    <p>
                      {el.passes?.key || 0} / {el.passes?.total || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Dribble
                    <div>success / attemps</div>
                  </DT>
                  <DD>
                    <p>
                      {el.dribbles?.success || 0} / {el.dribbles?.attempts || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Duel
                    <div>won / total</div>
                  </DT>
                  <DD>
                    <p>
                      {el.duels?.won || 0} / {el.duels?.total || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Fouls
                    <div>committed / drawn</div>
                  </DT>
                  <DD>
                    <p>
                      {el.fouls?.committed || 0} / {el.fouls?.drawn || 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Takles
                    <div>blocks / total</div>
                  </DT>
                  <DD>
                    <p>
                      {el?.takles?.blocks ?? 0} / {el?.takles?.total ?? 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>Interceptions</DT>
                  <DD>
                    <p>{el?.takles?.interceptions ?? 0}</p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Save
                    <div>panalty / total</div>
                  </DT>
                  <DD>
                    <p>
                      {el?.penalty?.saved ?? 0} / {el?.goals?.saves ?? 0}
                    </p>
                  </DD>
                </DL>
                <DL>
                  <DT>
                    Penalty
                    <div>missed / goals</div>
                  </DT>
                  <DD>
                    <p>
                      {el?.penalty?.missed ?? 0} / {el?.penalty.scored ?? 0}
                    </p>
                  </DD>
                </DL>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlayerInfo;
