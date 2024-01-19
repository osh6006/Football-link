import { create } from "zustand";

interface IModalsState {
  isOpenSportsSettingModal: boolean;
  openSportsSettingModal: () => void;
  closeSportsSettingModal: () => void;
}

const useModalsStore = create<IModalsState>()((set) => ({
  isOpenSportsSettingModal: false,
  openSportsSettingModal: () =>
    set(() => {
      return { isOpenSportsSettingModal: true };
    }),
  closeSportsSettingModal: () =>
    set(() => {
      return { isOpenSportsSettingModal: false };
    }),
}));

export default useModalsStore;
