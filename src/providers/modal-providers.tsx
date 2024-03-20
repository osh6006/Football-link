import { useModals } from "stores/modals-store";
import SportsSettingModal from "../components/modal/sports-setting-modal";
import LeagueSettingModal from "components/modal/league-setting-modal";

interface IModalProvidersProps {}

const ModalProviders: React.FunctionComponent<IModalProvidersProps> = () => {
  const isOpenSportsSettingModal = useModals(
    (state) => state.isOpenSportsSettingModal,
  );
  const isOpenLeagueSettingModal = useModals(
    (state) => state.isOpenLeagueSettingModal,
  );

  return (
    <>
      {isOpenSportsSettingModal ? <SportsSettingModal /> : null}
      {isOpenLeagueSettingModal ? <LeagueSettingModal /> : null}
    </>
  );
};

export default ModalProviders;
