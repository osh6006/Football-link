import * as React from "react";
import SportsSettingModal from "../components/modal/sports-setting-modal";
import LeagueSettingModal from "components/modal/league-setting-modal";

interface IModalProvidersProps {}

const ModalProviders: React.FunctionComponent<IModalProvidersProps> = () => {
  return (
    <>
      <SportsSettingModal />
      <LeagueSettingModal />
    </>
  );
};

export default ModalProviders;
