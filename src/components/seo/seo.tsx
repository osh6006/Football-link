import * as React from "react";
import { Helmet } from "react-helmet-async";

interface ISEOProps {
  pageUrl?: string;
  metaImage?: string;
  title: string;
  desc?: string;
  keywords?: string;
}

const SEO: React.FunctionComponent<ISEOProps> = ({
  pageUrl = "/",
  metaImage = "https://res.cloudinary.com/dxesudkxn/image/upload/v1712584707/footballLink/rkjdll9efwskvezgh7em.png",
  title,
  desc = "Football Link is your ultimate destination for the latest football news, match highlights, scores, and analysis. Stay updated with all the action from the world of football with Football Link.",
  keywords,
}) => {
  return (
    <Helmet>
      {/* common */}
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={"Football Link"} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={pageUrl} />

      {/* google */}
      <meta itemProp="name" content="Football Link" />
      <meta itemProp="description" content={desc} />
      <meta itemProp="image" content={metaImage} />

      {/* facebook */}
      <meta property="og:url" content="https://football-link.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={metaImage} />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={metaImage} />

      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
