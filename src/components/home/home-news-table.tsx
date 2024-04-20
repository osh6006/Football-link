import { componentBackgroundChange } from "utils/util";

import Title from "./title";
import HomeNewsCard from "./home-news-card";
import HomeNewsSkeleton from "./home-news-skeleton";
import MoreArrow from "components/common/more-arrow";

import { useTheme } from "stores/theme-store";
import useEmblaCarousel from "embla-carousel-react";
import { useLeagueStore } from "stores/league-store";
import {
  NextButton,
  PrevButton,
  useNewsPrevNextButtons,
} from "./news-carousel-buttons";
import { useGlobalNewsQuery } from "hooks/services/quries/use-news-query";

import styles from "./news.module.css";

interface IHomeNewTableProps {}

const HomeNewsTable: React.FunctionComponent<IHomeNewTableProps> = () => {
  const theme = useTheme();
  const selectedLeague = useLeagueStore((state) => state.selectedLeague);
  const { data, isLoading, isError, isSuccess } = useGlobalNewsQuery(
    selectedLeague?.name!,
    true,
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useNewsPrevNextButtons(emblaApi);

  return (
    <div className="overflow-hidden">
      <Title>
        News
        <MoreArrow path="/news" />
      </Title>
      <div
        className={componentBackgroundChange(
          theme,
          "mt-2 w-full rounded-md p-4 shadow-md ",
        )}
      >
        {isLoading ? <HomeNewsSkeleton /> : null}
        {isError ? (
          <div className="flex h-full w-full items-center justify-center text-xl font-bold ">
            There's been an error on the server 🤮
          </div>
        ) : null}
        {isSuccess ? (
          <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
                {data?.map((el, i) => {
                  return (
                    <div
                      className={styles.embla__slide}
                      key={el.title + el.description}
                    >
                      <HomeNewsCard
                        author={el.author}
                        imgUrl={el.urlToImage}
                        title={el.title}
                        url={el.url}
                        desc={el.description}
                        date={el.publishedAt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute top-1/2 z-20 flex w-full justify-between px-10">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default HomeNewsTable;
