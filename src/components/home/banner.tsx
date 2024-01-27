import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import clsx from "clsx";
import useSportStore from "stores/sports-store";
import useLeagueStore from "stores/league-store";
import { useBannerQuery } from "hooks/use-banner-query";
import Loading from "components/common/loading";
import useThemeStore from "stores/theme-store";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  const { selectedSport } = useSportStore();
  const { selectedLeague } = useLeagueStore();
  const { theme } = useThemeStore();

  const {
    data: banners,
    isLoading,
    isError,
    isSuccess,
  } = useBannerQuery(
    selectedSport?.value!,
    selectedLeague?.rapid_football_league_id!,
  );

  if (isLoading) {
    return (
      <div className="flex  min-h-[350px] items-center justify-center">
        <Loading size="md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full min-h-[350px] items-center justify-center text-xl">
        서버에서 데이터를 불러올 수 없습니다.
      </div>
    );
  }

  const BASE_URL = process.env.REACT_APP_SUPERBASE_API_URL;
  const sportsType = selectedSport?.value;
  const leagueId = selectedLeague?.rapid_football_league_id;

  if (banners?.length === 0) {
    return (
      <div
        className={clsx(
          `flex h-[350px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-xl shadow-md`,
          theme === "light" && "bg-White",
          theme === "dark" && "bg-VeryDarkGreyDark",
        )}
      >
        아직 배너 이미지가 추가되지 않았습니다.
      </div>
    );
  }

  if (isSuccess) {
    return (
      <Carousel
        className=" overflow-hidden rounded-lg "
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
        {banners?.map((banner) => (
          <div
            style={{
              backgroundImage: `url("${BASE_URL}/storage/v1/object/public/spolink/banner_images/${sportsType}/${leagueId}/${banner.name}")`,
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
