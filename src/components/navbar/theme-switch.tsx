import { Moon, Sun } from "lucide-react";

interface IThemeSwitchProps {}

const ThemeSwitch: React.FunctionComponent<IThemeSwitchProps> = () => {
  return (
    <div className="flex items-center gap-x-3  text-DarkGrey">
      <Sun />
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" />
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
  );
};

export default ThemeSwitch;
