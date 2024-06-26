import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface INewsContainerProps {
  children: React.ReactNode;
}

const NewsContainer: React.FunctionComponent<INewsContainerProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "m-4 mx-auto max-w-[1280px] rounded-md p-8 text-MediumGrey shadow-md",
      )}
    >
      {children}
    </div>
  );
};

export default NewsContainer;
