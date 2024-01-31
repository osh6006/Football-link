import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IRankContainerProps {
  children: React.ReactNode;
}

const RankContainer: React.FunctionComponent<IRankContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "m-4 rounded-md p-8 text-MediumGrey shadow-md ",
      )}
    >
      {children}
    </div>
  );
};

export default RankContainer;
