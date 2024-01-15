import clsx from "clsx";
import Inner from "../../containers/inner";
import useThemeStore from "../../stores/theme-store";

const Navbar = () => {
  const { theme } = useThemeStore();

  return (
    <nav
      className={clsx(
        `fix inset-x-0 top-0 justify-center border px-4 py-2`,
        theme === "light" ? "bg-White" : "bg-DarkGrey",
      )}
    >
      test
    </nav>
  );
};

export default Navbar;
