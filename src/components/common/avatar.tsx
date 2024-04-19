import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

const sizeObj = {
  sm: 20,
  md: 30,
  lg: 40,
  xl: 50,
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
            className={clsx(`aspect-square rounded-full`)}
            width={sizeObj[size]}
            height={sizeObj[size]}
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
