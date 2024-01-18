import { useRef } from "react";
import Modal from "./modal";
import ModalContainer from "./modal-container";
import useModalsStore from "../../stores/modals-store";

interface ISportsSettingModalProps {}

const SportsSettingModal: React.FunctionComponent<
  ISportsSettingModalProps
> = () => {
  const { isOpenSportsSettingModal, closeSportsSettingModal } =
    useModalsStore();
  const nodeRef = useRef(null);

  console.log(isOpenSportsSettingModal);

  return (
    <>
      <Modal
        title=""
        desc=""
        isOpen={isOpenSportsSettingModal}
        onClose={() => closeSportsSettingModal()}
        nodeRef={nodeRef}
      >
        <ModalContainer>
          <div>test</div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default SportsSettingModal;
