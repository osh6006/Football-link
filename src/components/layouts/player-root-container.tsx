import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IPlayerRootContainerProps {
  children: React.ReactNode;
}

const PlayerRootContainer: React.FunctionComponent<
  IPlayerRootContainerProps
> = ({ children }) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={componentBackgroundChange(
        theme,
        "max-w-7xl rounded-md p-4 text-MediumGrey sm:m-8 sm:p-8 xl:mx-auto",
      )}
    >
      {children}
    </div>
  );
};

export default PlayerRootContainer;
