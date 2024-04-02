import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

interface IMenuProps<T> {
  title: string;
  menuList: T[];
  renderMenu: (menu: T) => React.ReactNode;
}

const Menu = <T,>({ title, menuList, renderMenu }: IMenuProps<T>) => {
  return (
    <HeadlessMenu as="div">
      <HeadlessMenu.Button className="inline-flex w-full justify-center rounded-md bg-Main px-4 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-MainHover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {title}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </HeadlessMenu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HeadlessMenu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {menuList.map((item) => renderMenu(item))}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
};

export default Menu;
