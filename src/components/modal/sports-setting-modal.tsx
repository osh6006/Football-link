import Modal from "./modal";
import ModalContainer from "./modal-container";
import useModalsStore from "../../stores/modals-store";

interface ISportsSettingModalProps {}

const SportsSettingModal: React.FunctionComponent<
  ISportsSettingModalProps
> = () => {
  const { isOpenSportsSettingModal, closeSportsSettingModal } =
    useModalsStore();

  return (
    <Modal
      title=""
      desc=""
      isOpen={isOpenSportsSettingModal}
      onClose={() => closeSportsSettingModal()}
    >
      <ModalContainer>
        <div>test</div>
      </ModalContainer>
    </Modal>
  );
};

export default SportsSettingModal;
