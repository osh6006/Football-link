import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import SearchResult from "./search-result";
import SearchHeader from "./search-header";

interface ISearchBarProps {
  isSearchbarOpen: boolean;
  setIsSearchbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
  isSearchbarOpen,
}) => {
  return (
    <Transition.Root appear show={isSearchbarOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-x-0 top-0 z-30 mt-[55px] h-[calc(100dvh-55px)] bg-gray-500 bg-opacity-75 p-10 transition-opacity">
          <SearchHeader />
          {/* <SearchResult /> */}
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};

export default SearchBar;
