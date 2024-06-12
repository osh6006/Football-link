import LineUp from "./lineup";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useLiveLineUpQuery } from "hooks/tanstack-query/use-live-query";

interface ILineUpFieldProps {
  fixtureId?: number;
}

const LineUpField: React.FunctionComponent<ILineUpFieldProps> = ({
  fixtureId,
}) => {
  const { data, isLoading, isError } = useLiveLineUpQuery(fixtureId);

  if (isLoading)
    return (
      <ComponentStatusContainer state="loading" height={450}>
        <Loading size="lg" />
      </ComponentStatusContainer>
    );

  if (isError)
    return (
      <ComponentStatusContainer state="error" height={450}>
        <h1>Something Error! 🤮</h1>
      </ComponentStatusContainer>
    );

  if (!data?.length)
    return (
      <ComponentStatusContainer state="loading" height={450}>
        <h1 className="text-center text-2xl font-semibold text-gray-400">
          We can't check the lineup yet The lineup of matches will be updated
          15-20 minutes before the start of the match. 😣
        </h1>
      </ComponentStatusContainer>
    );

  const homeData = data[0];
  const homePlayerArr = data[0].startXI.map((el) => el.player) || [];

  const awayData = data[1];
  const awayPlayerArr = data[1].startXI.map((el) => el.player) || [];

  return (
    <div className=" rounded-md bg-green-400 p-4 text-white">
      <div className="relative grid w-full grid-cols-2 rounded-md border-4 border-white px-2 py-10">
        <LineUp formation={homeData?.formation} lineUp={homePlayerArr} isHome />
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white py-4 "></div>
        <div className="absolute"></div>
        <LineUp
          formation={awayData?.formation}
          lineUp={awayPlayerArr}
          isHome={false}
        />
      </div>
    </div>
  );
};

export default LineUpField;
