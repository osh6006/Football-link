import { SelectorHook, createStore } from "./root-store";

type Filter = "player" | "team";

interface ISearchState {
  filter: Filter;
  keyword: string;
  isOpen: boolean;

  setFilter: (option: Filter) => void;
  setKeyWord: (value: string) => void;
  setIsOpen: (value: boolean) => void;
}

const useSearchStore = createStore<ISearchState>((set) => ({
  keyword: "",
  filter: "team",
  isOpen: false,

  setFilter: (option: Filter) =>
    set(() => {
      return { filter: option };
    }),
  setKeyWord: (value: string) =>
    set(() => {
      return { keyword: value };
    }),
  setIsOpen: (value: boolean) =>
    set(() => {
      return { isOpen: value };
    }),
}));

export const useSearch: SelectorHook<ISearchState, "filter"> = (
  selector = (state: ISearchState) => state.filter,
) => useSearchStore(selector);
