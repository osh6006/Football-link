import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "stores/theme-store";
import { componentBackgroundChange } from "utils/util";

interface IHowToLeagueProps {}

const HowToLeague: React.FunctionComponent<IHowToLeagueProps> = () => {
  const theme = useTheme();

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "h flex w-full max-w-[1000px] flex-col gap-y-2 rounded-md p-5 text-xl shadow-md",
      )}
    >
      <div className="text-center sm:text-left">
        <h2 className=" font-bold ">Please choose your favorite league!</h2>
        <p className="text-base font-normal">
          The overall steps are as follows
        </p>
      </div>
      <div className="">
        <div className="my-2 flex w-full flex-1 flex-col items-center justify-center gap-y-2 sm:flex-row sm:items-start sm:justify-around">
          <h3 className="text-lg font-semibold">
            <strong className="text-Main">Step 1.</strong> Please choose a
            country
          </h3>
          <LazyLoadImage
            src={
              "https://res.cloudinary.com/dxesudkxn/image/upload/v1712223761/footballLink/pvmqjyppinmfmmtjade3.gif"
            }
            alt="step1"
            className="w-[300px] rounded-md border border-MediumGrey"
            threshold={100}
          />
        </div>
        <div className="my-2 flex w-full flex-1 flex-col items-center justify-center gap-y-2 sm:flex-row sm:items-start sm:justify-around">
          <h3 className="text-lg font-semibold">
            <strong className="text-Main">Step 2.</strong> Please choose a
            league
          </h3>
          <LazyLoadImage
            src={
              "https://res.cloudinary.com/dxesudkxn/image/upload/v1712223761/footballLink/lsr28d7hvi4lheab8tuj.gif"
            }
            alt="step2"
            className="w-[300px] rounded-md border border-MediumGrey"
            threshold={100}
          />
        </div>
      </div>
      <div>
        <h3 className="my-2 flex flex-col items-center justify-center gap-x-2 sm:flex-row sm:items-start sm:justify-start">
          That's it! Now enjoy
          <strong className="text-Main">Football Link 😎</strong>
        </h3>
        <div></div>
      </div>
    </div>
  );
};

export default HowToLeague;
