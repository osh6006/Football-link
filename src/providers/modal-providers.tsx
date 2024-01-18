import * as React from "react";
import SportsSettingModal from "../components/modal/sports-setting-modal";

interface IModalProvidersProps {}

const ModalProviders: React.FunctionComponent<IModalProvidersProps> = () => {
  return (
    <>
      <SportsSettingModal />
    </>
  );
};

export default ModalProviders;
