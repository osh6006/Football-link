import { componentBackgroundChange } from "utils/util";

import useThemeStore from "stores/theme-store";
import useLeagueStore from "stores/league-store";
import { useGlobalNewsQuery } from "hooks/services/quries/use-football-query";

import Loading from "components/common/loading";
import ComponentStatusContainer from "components/layouts/component-status-container";
import HomeNewsCard from "../home-news-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IHomeNewTableProps {}

const HomeNewTable: React.FunctionComponent<IHomeNewTableProps> = () => {
  const { theme } = useThemeStore();
  const { selectedLeague } = useLeagueStore();
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
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      className={componentBackgroundChange(
        theme,
        "mt-2 max-w-[1000px] rounded-md p-4 shadow-md",
      )}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
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
              key={el.url}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeNewTable;
