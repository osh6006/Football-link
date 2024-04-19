import clsx from "clsx";

import Carousel from "react-multi-carousel";
import Loading from "components/common/loading";

import { useTheme } from "stores/theme-store";
import { useBannerQuery } from "hooks/services/quries/use-banner-query";

import "react-multi-carousel/lib/styles.css";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = () => {
  const theme = useTheme();

  const { data: banners, isLoading, isError, isSuccess } = useBannerQuery();

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
        There's been an error on the server 🤮
      </div>
    );
  }

  const BASE_URL = process.env.REACT_APP_SUPERBASE_API_URL;

  if (banners && banners.length <= 0) {
    return (
      <div
        className={clsx(
          `flex h-[350px] w-full max-w-[1200px] items-center justify-center rounded-md bg-cover bg-center bg-no-repeat text-center text-2xl font-bold shadow-md`,
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
        showDots={true}
        shouldResetAutoplay
        renderDotsOutside
        slidesToSlide={1}
        swipeable
      >
        {banners?.map((banner) => (
          <div
            style={{
              backgroundImage: `url("${BASE_URL}/storage/v1/object/public/spolink/banner_images/${banner.name}")`,
            }}
            key={banner.id}
            className={"flex h-[350px] w-full bg-cover bg-center bg-no-repeat"}
          />
        ))}
      </Carousel>
    );
  }

  return null;
};

export default Banner;
