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
        "m-4 max-w-[1280px] rounded-xl p-8 text-MediumGrey shadow-md xl:mx-auto",
      )}
    >
      {children}
    </div>
  );
};

export default RankContainer;
