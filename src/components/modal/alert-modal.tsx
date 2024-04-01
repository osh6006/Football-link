import Button from "components/common/button";
import Modal from "./modal";

import { useModalActions, useModals } from "stores/modals-store";
import { useNavigate } from "react-router-dom";

interface IAlertModalProps {}

const PrivateModal: React.FunctionComponent<IAlertModalProps> = () => {
  const nav = useNavigate();
  const { closeModal } = useModalActions();
  const isAlertModal = useModals((state) => state.isOpenPrivateModal);

  return (
    <Modal
      isOpen={isAlertModal}
      title="Please Sing In!"
      desc="This service is available after you sign in. Please sign in!"
      onClose={() => closeModal("isOpenPrivateModal")}
    >
      <div className="mt-10 flex flex-row-reverse gap-x-2">
        <Button
          size="sm"
          color="main"
          type="button"
          onClick={() => {
            closeModal("isOpenPrivateModal");
            nav("/auth");
          }}
        >
          Let'go Sign In!
        </Button>
        <Button
          size="sm"
          type="button"
          color="secondary"
          onClick={() => closeModal("isOpenPrivateModal")}
        >
          Cancle
        </Button>
      </div>
    </Modal>
  );
};

export default PrivateModal;
