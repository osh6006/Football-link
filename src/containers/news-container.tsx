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
        "mx-auto my-4 max-w-6xl rounded-md p-4 text-MediumGrey shadow-sm",
      )}
    >
      {children}
    </div>
  );
};

export default NewsContainer;
