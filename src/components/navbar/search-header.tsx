import clsx from "clsx";


import Menu from "components/common/menu";
import { Menu as HeadlessMenu } from "@headlessui/react";
import { SearchIcon } from "lucide-react";
import { useSearch } from "stores/search-store";
import { useTheme } from "stores/theme-store";

interface ISearchHeaderProps {}

const SearchHeader: React.FunctionComponent<ISearchHeaderProps> = (props) => {
  const theme = useTheme();
  const filter = useSearch((state) => state.filter);

  const setFilter = useSearch((state) => state.setFilter);
  const setKeyword = useSearch((state) => state.setKeyWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <>
      <div className="relative mx-auto flex max-w-[1000px] items-center ">
        <div className="pointer-events-none absolute inset-y-0 start-1 flex items-center ps-3">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className={clsx(
            "block w-full rounded-lg px-12 py-10 text-xl focus:outline-none focus:ring-4 focus:ring-Main",
            theme === "light" ? "bg-White" : "",
            theme === "dark" ? "bg-DarkGrey" : "",
          )}
          placeholder={`Search ${filter.toUpperCase()}...`}
          onChange={handleChange}
        />
        <div className="absolute end-4">
          <Menu
            menuList={[
              {
                name: "team",
              },
              {
                name: "player",
              },
            ]}
            title={filter}
            renderMenu={(menu) => {
              return (
                <HeadlessMenu.Item key={menu.name}>
                  {({ active }) => (
                    <button
                      onClick={() => setFilter(menu.name as "team" | "player")}
                      className={`${
                        active ? "bg-Main text-white" : "text-gray-900"
                      } group flex w-full items-center justify-center px-10 py-2 text-sm uppercase transition-colors`}
                    >
                      {menu.name}
                    </button>
                  )}
                </HeadlessMenu.Item>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
