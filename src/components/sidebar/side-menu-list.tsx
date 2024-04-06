import clsx from "clsx";
import useAuth from "hooks/use-auth";
import usePath from "hooks/use-path";
import { useNavigate } from "react-router-dom";
import { useModalActions } from "stores/modals-store";

interface ISideMenuListProps {
  label?: string;
  onClose: () => void;
}

const SideMenuList: React.FunctionComponent<ISideMenuListProps> = ({
  label,
  onClose,
}) => {
  const nav = useNavigate();
  const { user } = useAuth();
  const { paths, realPath } = usePath();
  const { openModal } = useModalActions();

  return (
    <>
      <p className="mx-2 mb-2 mt-4 text-sm uppercase tracking-wider text-Main">
        {label}
      </p>
      <ul className=" flex-1">
        {paths.map((item) => (
          <li
            key={item.path}
            onClick={() => {
              if (item.isPrivate) {
                if (!user) {
                  openModal("isOpenPrivateModal");
                } else {
                  nav(item.path);
                  onClose();
                }
              } else {
                nav(item.path);
                onClose();
              }
            }}
            className={clsx(
              "flex cursor-pointer items-center gap-x-2 px-5 py-3 text-lg transition-colors hover:bg-Main hover:text-White",
              realPath === `${item.path.replace("/", "")}`
                ? "bg-Main text-White"
                : item.path === "/" && realPath === "Home"
                  ? "bg-Main text-White"
                  : "",
            )}
          >
            {item.icon}
            {item.name}
            {item.isNew ? (
              <sup className="text-xs text-green-500">New</sup>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideMenuList;
