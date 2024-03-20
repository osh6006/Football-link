import Loading from "components/common/loading";
import Tabs from "components/common/tabs";
import ComponentStatusContainer from "components/layouts/component-status-container";
import { forwardRef } from "react";

interface ILiveDetailProps {}

const LiveDetail: React.FunctionComponent<ILiveDetailProps> = forwardRef<
  ILiveDetailProps & HTMLDivElement
>(({}, ref) => {
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
    <div ref={ref} className="p-5">
      <Tabs defaultTab="global">
        <Tabs.TabContainer className="border border-MediumGrey">
          <Tabs.Tab id="event" className="mx-2 border-r p-5">
            Events
          </Tabs.Tab>
          <Tabs.Tab id="lignUp" className="mx-2 border-r p-5">
            LineUp
          </Tabs.Tab>
          <Tabs.Tab id="stat" className="mx-2 p-5">
            Statistics
          </Tabs.Tab>
        </Tabs.TabContainer>
        <Tabs.TabPanel id="event">
          <div>event</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel id="lignUp">
          <div>lignUp</div>
        </Tabs.TabPanel>
        <Tabs.TabPanel id="stat">
          <div>stat</div>
        </Tabs.TabPanel>
      </Tabs>
    </div>
  );
});

export default LiveDetail;
