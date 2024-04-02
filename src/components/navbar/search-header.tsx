import { useSearch } from "stores/search-store";

interface ISearchHeaderProps {}

const SearchHeader: React.FunctionComponent<ISearchHeaderProps> = (props) => {
  const keyword = useSearch((state) => state.keyword);
  const setKeyword = useSearch((state) => state.setKeyWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <>
      <input
        type="text"
        value={keyword}
        placeholder="Search Team or Player..."
        onChange={handleChange}
        className="w-full rounded-md bg-white px-10 py-10 text-lg focus:outline-none focus:ring-4 focus:ring-Main md:text-xl xl:text-2xl"
      />
    </>
  );
};

export default SearchHeader;
