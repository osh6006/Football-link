import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <Carousel
      className="rounded-lg bg-white p-2"
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
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/640px-Premier_League_Logo.svg.png"
        alt="banner"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/640px-Premier_League_Logo.svg.png"
        alt="banner"
      />
    </Carousel>
  );
};

export default Banner;
