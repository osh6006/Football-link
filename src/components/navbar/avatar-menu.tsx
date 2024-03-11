import clsx from "clsx";

import Avatar from "../common/avatar";
import { CSSTransition } from "react-transition-group";

import "./avatar-menu.css";
import useOutsideClick from "../../hooks/use-outside-click";
import useAuth from "../../hooks/use-auth";
import { User } from "@supabase/supabase-js";

interface IAvatarMenuProps {
  user: User;
  size: "sm" | "md" | "lg";
}

const AvatarMenu: React.FunctionComponent<IAvatarMenuProps> = ({
  user,
  size,
}) => {
  const { isOpen, setIsOpen, ref, nodeRef } = useOutsideClick();
  const { signOut } = useAuth();

  return (
    <div
      ref={ref}
      className="relative rounded-full border-2 border-transparent transition hover:border-Main"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Avatar size={size} imgUrl={user?.user_metadata?.avatar_url} />
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        classNames={"avatar-menu"}
        unmountOnExit
      >
        <ul
          ref={nodeRef}
          role="menu"
          className={clsx(
            `absolute right-0 z-10 mt-2 min-w-28 overflow-hidden rounded-md bg-White px-2
            py-2 text-DarkGrey shadow-lg focus:outline-none `,
          )}
        >
          <li
            onClick={async () => signOut()}
            className={clsx(
              `
                relative cursor-pointer select-none rounded-md p-1
                transition-colors hover:bg-Main hover:text-White
            `,
            )}
          >
            로그아웃
          </li>
          <li
            className={clsx(
              `
                relative cursor-pointer select-none rounded-md p-1
                transition-colors hover:bg-Main hover:text-White
            `,
            )}
          >
            마이 프로필
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default AvatarMenu;
