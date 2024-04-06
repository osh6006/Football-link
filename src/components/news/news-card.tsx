import dayjs from "dayjs";
import { GlobalNewsItem } from "types/football";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface INewsCardProps {
  newsItem: GlobalNewsItem;
}

const NewsCard: React.FunctionComponent<INewsCardProps> = ({ newsItem }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <li
      onClick={() => openInNewTab(newsItem.url)}
      className="flex cursor-pointer flex-col justify-around rounded-md border-2  border-MediumGrey px-5 py-3  transition-colors hover:border-Main hover:bg-Main hover:text-White"
    >
      <div className="mb-2 flex  flex-col justify-end text-sm">
        {/* <p>{el.author}</p>
<p>{el.source.name}</p> */}
        <time>{dayjs(newsItem.publishedAt).format("MM DD HH, YYYY")}</time>
      </div>

      <div className="flex flex-col justify-between gap-x-4 gap-y-2 sm:flex-row">
        <LazyLoadImage
          effect="opacity"
          src={newsItem.urlToImage}
          alt="thumbnail"
          className="h-40 w-full rounded-md sm:aspect-auto sm:h-32 sm:w-[400px]"
        />
        <div className="">
          <h2 className="font-semibold">{newsItem.title}</h2>
          <p className="mt-2 text-sm">{newsItem.description}</p>
        </div>
      </div>
      <div className="mt-2 flex items-end justify-between text-sm">
        <p>{newsItem.author}</p>
        <p>{newsItem.source.name}</p>
      </div>
    </li>
  );
};

export default NewsCard;
