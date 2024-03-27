import clsx from "clsx";

import Loading from "components/common/loading";
import Carousel from "react-multi-carousel";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import { useTheme } from "stores/theme-store";
import useSportStore from "stores/sports-store";
import { useBannerQuery } from "hooks/services/quries/use-banner-query";

import "react-multi-carousel/lib/styles.css";
import { useLeagueStore } from "stores/league-store";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = () => {
  const { selectedSport } = useSportStore();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const theme = useTheme();

  const {
    data: banners,
    isLoading,
    isError,
    isSuccess,
  } = useBannerQuery(selectedSport?.value!, selectedLeague?.leagueId!);

  if (isLoading) {
    return (
      <div className="flex  min-h-[350px] items-center justify-center">
        <Loading size="md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full min-h-[350px] min-w-[1000px] items-center justify-center text-xl">
        서버에서 데이터를 불러올 수 없습니다.
      </div>
    );
  }

  const BASE_URL = process.env.REACT_APP_SUPERBASE_API_URL;
  const sportsType = selectedSport?.value;
  const leagueId = selectedLeague?.leagueId;

  if (true) {
    return (
      <div
        className={clsx(
          `flex h-[350px] w-full min-w-[1000px] items-center justify-center rounded-md bg-cover bg-center bg-no-repeat text-2xl font-bold shadow-md`,
          theme === "light" && "bg-White",
          theme === "dark" && "bg-DarkGrey",
        )}
      >
        Banner image has not been added yet. Sorry 😣
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  if (isSuccess) {
    return (
      <LazyLoadComponent>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="rounded-md"
          containerClass="container"
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
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          showDots
          shouldResetAutoplay
          renderDotsOutside
          slidesToSlide={1}
          swipeable
        >
          {banners?.map((banner) => (
            <div
              style={{
                backgroundImage: `url("${BASE_URL}/storage/v1/object/public/spolink/banner_images/${sportsType}/${leagueId}/${banner.name}")`,
              }}
              key={banner.id}
              className={
                "flex h-[350px] w-full bg-cover bg-center bg-no-repeat"
              }
            />
          ))}
        </Carousel>
      </LazyLoadComponent>
    );
  }

  return null;
};

export default Banner;
