import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const sizeObj = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-[80px]",
};

interface IAvatarProps {
  size: "sm" | "md" | "lg" | "xl";
  imgUrl: string;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({ imgUrl, size }) => {
  return (
    <>
      {imgUrl ? (
        <>
          <LazyLoadImage
            src={imgUrl}
            alt="avatar"
            effect="opacity"
            className={clsx(`rounded-full`, sizeObj[size])}
          />
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx(`rounded-full`, sizeObj[size])}
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      )}
    </>
  );
};

export default Avatar;
