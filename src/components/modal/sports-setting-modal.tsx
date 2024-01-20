import clsx from "clsx";

import useModalsStore from "../../stores/modals-store";
import useThemeStore from "../../stores/theme-store";

import Modal from "./modal";
import StepTwo from "../auth-page/step-two";

interface ISportsSettingModalProps {}

const SportsSettingModal: React.FunctionComponent<
  ISportsSettingModalProps
> = () => {
  const { isOpenSportsSettingModal, closeSportsSettingModal } =
    useModalsStore();
  const { theme } = useThemeStore();

  return (
    <Modal
      title=""
      desc=""
      isOpen={isOpenSportsSettingModal}
      onClose={() => closeSportsSettingModal()}
    >
      <div
        className={clsx(
          `mx-auto w-fit rounded-md px-5 py-8 shadow-lg`,
          theme === "light" && "bg-LightGreyLightBg",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
      >
        <StepTwo />
      </div>
    </Modal>
  );
};

export default SportsSettingModal;
