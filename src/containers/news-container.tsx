import useThemeStore from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface INewsContainerProps {
  children: React.ReactNode;
}

const NewsContainer: React.FunctionComponent<INewsContainerProps> = ({
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "m-4 rounded-md p-8 text-MediumGrey shadow-md",
      )}
    >
      {children}
    </div>
  );
};

export default NewsContainer;
