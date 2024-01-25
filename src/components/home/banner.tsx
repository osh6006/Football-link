import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import clsx from "clsx";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <Carousel
      className="max-h-[300px] overflow-hidden rounded-lg "
      autoPlay
      swipeable
      stopOnHover
      infiniteLoop
      emulateTouch
      showIndicators
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      <div
        className={clsx(
          `flex min-h-[300px] w-full bg-[url('https://e0.365dm.com/22/09/2048x1152/skysports-premier-league-promo_5897092.png?20220913083410')] bg-cover bg-center bg-no-repeat`,
        )}
      ></div>
      <div
        className={clsx(
          `flex min-h-[300px] w-full bg-[url('https://cdn.punchng.com/wp-content/uploads/2023/10/18201131/Premier-League.png')] bg-cover bg-center bg-no-repeat`,
        )}
      ></div>
      <div
        className={clsx(
          `flex min-h-[300px] w-full bg-[url('https://hips.hearstapps.com/hmg-prod/images/manchester-city-premier-league-trophy-648b0bbfda4f8.jpeg')] bg-cover bg-center bg-no-repeat`,
        )}
      ></div>
    </Carousel>
  );
};

export default Banner;
