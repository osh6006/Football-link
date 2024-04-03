import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import SearchResult from "./search-result";
import SearchHeader from "./search-header";
import { X } from "lucide-react";
import { useSearch } from "stores/search-store";

interface ISearchBarProps {}

const SearchBar: React.FunctionComponent<ISearchBarProps> = () => {
  const setkeyword = useSearch((state) => state.setKeyWord);

  const isSearchBarOpen = useSearch((state) => state.isOpen);
  const setIsSearchbarOpen = useSearch((state) => state.setIsOpen);

  return (
    <Transition.Root appear show={isSearchBarOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-x-0 top-0 z-30 mt-[55px] h-[calc(100dvh-55px)] bg-gray-500 bg-opacity-75 p-3 py-5 transition-opacity sm:p-10">
          <SearchHeader />
          <SearchResult />
          <button
            onClick={() => {
              setIsSearchbarOpen(false);
              setkeyword("");
            }}
            className="absolute right-2 top-2 rounded-md bg-black/50 p-1 text-White transition-colors hover:text-Main active:scale-95 sm:right-10 sm:top-10"
          >
            <X />
          </button>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};

export default SearchBar;
