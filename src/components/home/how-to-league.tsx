import { componentBackgroundChange } from "utils/util";

import SEO from "components/seo/seo";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";

interface IHowToLeagueProps {}

const HowToLeague: React.FunctionComponent<IHowToLeagueProps> = () => {
  const theme = useTheme();

  return (
    <div className="my-[305px] flex h-[calc(100dvh-55px)] w-full flex-col items-center justify-center gap-y-2 p-5 font-bold 2xl:my-[210px]">
    <div
      className={componentBackgroundChange(
        theme,
        "h flex w-full  max-w-[1000px]  flex-col gap-y-2 rounded-md p-5 text-xl shadow-md",
      )}
    >
      <SEO pageUrl="/" title={`Football Link | Home`}>
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="https://res.cloudinary.com/dxesudkxn/image/upload/v1714622426/footballLink/dojhbtimjgngh8xofo1b.gif"
          type="image/gif"
          imageSizes="300px"
        />

        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="https://res.cloudinary.com/dxesudkxn/image/upload/v1714622427/footballLink/meqriti0gsemb0onghwi.gif"
          type="image/gif"
          imageSizes="300px"
        />
      </SEO>
      <div className="text-center sm:text-left">
        <h2 className=" font-bold ">Please choose your favorite league!</h2>
        <p className="text-base font-normal">
          The overall steps are as follows
        </p>
      </div>
        <div className="my-2 flex w-fullflex-1 flex-col items-center justify-center gap-y-2 sm:flex-row sm:items-start sm:justify-around">
          <h3 className="text-lg font-semibold">
            <strong className="text-Main">Step 1.</strong> Please choose a
            country
          </h3>
          <img
            src={
              "https://res.cloudinary.com/dxesudkxn/image/upload/v1714622426/footballLink/dojhbtimjgngh8xofo1b.gif"
            }
            alt="step1"
            className="w-[300px]  rounded-md border border-MediumGrey"
            width={300}
            height={300}
          />
        </div>
        <div className="my-2 flex w-full flex-1 flex-col items-center justify-center gap-y-2 sm:flex-row sm:items-start sm:justify-around">
          <h3 className="text-lg font-semibold">
            <strong className="text-Main">Step 2.</strong> Please choose a
            league
          </h3>
          <img
            src={
              "https://res.cloudinary.com/dxesudkxn/image/upload/v1714622427/footballLink/meqriti0gsemb0onghwi.gif"
            }
            alt="step2"
            className="w-[300px] rounded-md border border-MediumGrey"
            width={300}
            height={300}
          />
        </div>

        <div>
        <h3 className="my-2 flex flex-col items-center justify-center gap-x-2 sm:flex-row sm:items-start sm:justify-start">
          That's it! Now enjoy
          <strong className="text-Main">Football Link 😎</strong>
        </h3>
        <div></div>
      </div>
      </div>

    </div>

  );
};

export default HowToLeague;
