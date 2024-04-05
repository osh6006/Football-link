import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IRankContainerProps {
  children: React.ReactNode;
}

const RankContainer: React.FunctionComponent<IRankContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "m-4 max-w-[1280px] rounded-xl p-2 text-MediumGrey shadow-md sm:p-8 xl:mx-auto",
      )}
    >
      {children}
    </div>
  );
};

export default RankContainer;
