import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "stores/theme-store";

interface IThemeSwitchProps {}

const ThemeSwitch: React.FunctionComponent<IThemeSwitchProps> = () => {
  const theme = useTheme();
  const setTheme = useTheme((state) => state.setTheme);

  const handleChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
      className={clsx(
        `mx-4 mb-4 mt-2 flex items-center justify-center rounded-md py-4`,
        theme === "light" ? "bg-LinesLight" : "bg-VeryDarkGreyDark",
      )}
    >
      <div className="flex items-center gap-x-3 text-gray-500">
        <Sun />
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            aria-label="theme-switcher"
            className="peer sr-only"
            onChange={handleChange}
            checked={theme === "dark"}
          />
          <div
            className="peer h-6 w-11 rounded-full bg-Main
        after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full 
        after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']
         peer-checked:bg-Main peer-checked:after:translate-x-full peer-checked:after:border-white 
         peer-focus:ring-4 peer-focus:ring-MainHover rtl:peer-checked:after:-translate-x-full "
          ></div>
        </label>
        <Moon />
      </div>
    </div>
  );
};

export default ThemeSwitch;
