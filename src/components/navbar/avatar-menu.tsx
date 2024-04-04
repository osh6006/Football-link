import clsx from "clsx";
import { Fragment } from "react";
import Avatar from "../common/avatar";
import { User } from "@supabase/supabase-js";

import { Menu, Transition } from "@headlessui/react";

import useAuth from "../../hooks/use-auth";

interface IAvatarMenuProps {
  user: User;
  size: "sm" | "md" | "lg";
}

const AvatarMenu: React.FunctionComponent<IAvatarMenuProps> = ({
  user,
  size,
}) => {
  const { signOut } = useAuth();

  return (
    <Menu as="div" className="relative ">
      <Menu.Button>
        <Avatar size={size} imgUrl={user?.user_metadata?.avatar_url} />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            `absolute right-0 z-10 mt-2 min-w-28 overflow-hidden rounded-md bg-White px-2
            py-2 text-MediumGrey shadow-lg focus:outline-none `,
          )}
        >
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={async () => signOut()}
                className={clsx(
                  "relative w-full cursor-pointer select-none rounded-md px-2 py-1 text-left transition-colors hover:bg-Main hover:text-White",
                )}
              >
                SignOut
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={async () => signOut()}
                className={clsx(
                  "relative w-full cursor-pointer select-none rounded-md px-2 py-1 text-left transition-colors hover:bg-Main hover:text-White",
                )}
              >
                Profile
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AvatarMenu;
