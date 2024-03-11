import SportsSettingModal from "../components/modal/sports-setting-modal";
import LeagueSettingModal from "components/modal/league-setting-modal";
import useModalsStore from "stores/modals-store";

interface IModalProvidersProps {}

const ModalProviders: React.FunctionComponent<IModalProvidersProps> = () => {
  const { isOpenLeagueSettingModal, isOpenSportsSettingModal } =
    useModalsStore();
  return (
    <>
      {isOpenSportsSettingModal ? <SportsSettingModal /> : null}
      {isOpenLeagueSettingModal ? <LeagueSettingModal /> : null}
    </>
  );
};

export default ModalProviders;
