import clsx from "clsx";
import useThemeStore from "../../stores/theme-store";
import { useMatches } from "react-router-dom";

const Navbar = () => {
  const { theme } = useThemeStore();
  const { pathname } = useMatches()[1] || [];
  let newPath = pathname?.replace(/\//g, "") || "";

  return (
    <nav
      className={clsx(
        `fix  inset-x-0 top-0 flex h-[55px] items-center border px-4 capitalize`,
        theme === "light" ? "bg-White" : "bg-DarkGrey",
      )}
    >
      {newPath}
    </nav>
  );
};

export default Navbar;
