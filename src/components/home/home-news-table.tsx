import { componentBackgroundChange } from "utils/util";

import HomeNewsCard from "./home-news-card";
import { ArrowFix } from "components/common/util";
import HomeNewsSkeleton from "./home-news-skeleton";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { useTheme } from "stores/theme-store";
import { useGlobalNewsQuery } from "hooks/services/quries/use-news-query";
import { useLeagueStore } from "stores/league-store";

import "react-multi-carousel/lib/styles.css";
import Title from "./title";
import MoreArrow from "components/common/more-arrow";

interface IHomeNewTableProps {}

const HomeNewsTable: React.FunctionComponent<IHomeNewTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const { data, isLoading, isError, isSuccess } = useGlobalNewsQuery(
    selectedLeague?.name!,
    true,
  );

  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },

    laptop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1024, min: 430 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },

    mobile: {
      breakpoint: { max: 430, min: 350 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 1,
      paritialVisibilityGutter: 1,
    },

    test: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 1,
      paritialVisibilityGutter: 1,
    },
  };

  return (
    <div>
      <Title>
        News
        <MoreArrow path="/news" />
      </Title>
      <div
        className={componentBackgroundChange(
          theme,
          "mt-2 h-full w-full rounded-md p-4 shadow-md ",
        )}
      >
        {isLoading ? <HomeNewsSkeleton /> : null}
        {isError ? (
          <div className="flex h-full w-full items-center justify-center text-xl font-bold ">
            There's been an error on the server 🤮
          </div>
        ) : null}
        {isSuccess ? (
          <Carousel
            arrows
            infinite
            swipeable
            draggable
            rtl={false}
            pauseOnHover
            itemClass=""
            sliderClass=""
            rewind={false}
            keyBoardControl
            dotListClass=""
            showDots={false}
            slidesToSlide={1}
            centerMode={false}
            shouldResetAutoplay
            autoPlaySpeed={3000}
            focusOnSelect={false}
            minimumTouchDrag={80}
            additionalTransfrom={0}
            responsive={responsive}
            renderDotsOutside={false}
            rewindWithAnimation={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            containerClass="container-with-dots"
            customLeftArrow={
              <ArrowFix className="absolute left-4 cursor-pointer rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/80">
                <ChevronLeftIcon />
              </ArrowFix>
            }
            customRightArrow={
              <ArrowFix className="absolute right-4 cursor-pointer rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/80">
                <ChevronRightIcon />
              </ArrowFix>
            }
            className="w-full overflow-hidden"
          >
            {data?.map((el, i) => {
              return (
                <HomeNewsCard
                  author={el.author}
                  imgUrl={el.urlToImage}
                  title={el.title}
                  url={el.url}
                  desc={el.description}
                  date={el.publishedAt}
                  key={el.title + el.description}
                />
              );
            })}
          </Carousel>
        ) : null}
      </div>
    </div>
  );
};

export default HomeNewsTable;
