import clsx from "clsx";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Loading from "components/common/loading";

import { useTheme } from "stores/theme-store";
import { useBannerQuery } from "hooks/services/quries/use-banner-query";

import styles from "./banner.module.css";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = () => {
  const theme = useTheme();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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

  const BASE_URL = import.meta.env.VITE_SUPERBASE_API_URL;

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

  if (isSuccess) {
    return (
      <section className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {banners.map((el) => (
              <div className={styles.embla__slide} key={el.id}>
                <img
                  className={styles.embla__slide__img}
                  src={`${BASE_URL}/storage/v1/object/public/spolink/banner_images/${el.name}`}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default Banner;
