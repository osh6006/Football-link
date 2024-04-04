import { componentBackgroundChange } from "utils/util";

import Carousel from "react-multi-carousel";
import HomeNewsCard from "./home-news-card";
import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";

import { useTheme } from "stores/theme-store";
import { useGlobalNewsQuery } from "hooks/services/quries/use-news-query";

import "react-multi-carousel/lib/styles.css";
import { useLeagueStore } from "stores/league-store";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ArrowFix } from "components/common/util";

interface IHomeNewTableProps {}

const HomeNewsTable: React.FunctionComponent<IHomeNewTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const { data, isLoading, isError } = useGlobalNewsQuery(
    selectedLeague?.name!,
    true,
  );

  if (isLoading) {
    return (
      <ComponentStatusContainer height="300" state="loading">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  if (isError) {
    return (
      <ComponentStatusContainer height="300" state="loading">
        <Loading size="md" />
      </ComponentStatusContainer>
    );
  }

  const responsive = {
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
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },

    tablet2: {
      breakpoint: { max: 350, min: 640 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },

    mobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "mt-2 w-full rounded-md p-4 shadow-md",
      )}
    >
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
    </div>
  );
};

export default HomeNewsTable;
