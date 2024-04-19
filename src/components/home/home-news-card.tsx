import "react-lazy-load-image-component/src/effects/opacity.css";

import dayjs from "dayjs";

interface IHomeNewsCardProps {
  imgUrl: string;
  title: string;
  author: string;
  url: string;
  desc: string;
  date: string;
}

const HomeNewsCard: React.FunctionComponent<IHomeNewsCardProps> = ({
  author,
  date,
  desc,
  title,
  imgUrl,
  url,
}) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      className="flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-md p-2 transition-all hover:scale-105"
      onClick={() => openInNewTab(url)}
    >
      <div className="space-y-2">
        <img
          alt="news-thumbnail"
          src={imgUrl}
          className="aspect-video rounded-md object-fill"
        />
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{desc.length > 150 ? desc.slice(0, 150) + "..." : desc}</p>
      </div>
      <div className="flex w-full justify-between">
        <time>{dayjs(date).format("YYYY-MM-DD, HH:MM")}</time>
        <span>{author || "unknown"}</span>
      </div>
    </div>
  );
};

export default HomeNewsCard;
