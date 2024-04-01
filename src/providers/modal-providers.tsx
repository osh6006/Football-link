import AlertModal from "components/modal/alert-modal";
import { useModals } from "stores/modals-store";

interface IModalProvidersProps {}

const ModalProviders: React.FunctionComponent<IModalProvidersProps> = () => {
  const isAlertModal = useModals((state) => state.isOpenPrivateModal);
  return <>{isAlertModal && <AlertModal />}</>;
};

export default ModalProviders;
