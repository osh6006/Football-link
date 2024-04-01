import { SelectorHook, createStore } from "./root-store";

type IModalName = "isOpenPrivateModal" | "isOpenLeagueSettingModal";

interface IModalState {
  isOpenPrivateModal: boolean;
  isOpenLeagueSettingModal: boolean;

  actions: {
    openModal: (name: IModalName) => void;
    closeModal: (name: IModalName) => void;
  };
}

const useModalStore = createStore<IModalState>((set) => ({
  isOpenPrivateModal: false,
  isOpenLeagueSettingModal: false,
  actions: {
    openModal: (name) => {
      set((state) => {
        return {
          ...state,
          [name]: true,
        };
      });
    },
    closeModal: (name) => {
      set((state) => {
        return {
          ...state,
          [name]: false,
        };
      });
    },
  },
}));

// 여기서 새로운 Hook을 만들고, SelectorHook 타입으로 지정해줍니다.
export const useModals: SelectorHook<IModalState, "isOpenPrivateModal"> = (
  selector = (state: IModalState) => state.isOpenPrivateModal,
) => useModalStore(selector);

export const useModalActions = () => useModalStore((state) => state.actions);
