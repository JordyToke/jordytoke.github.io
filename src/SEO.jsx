import React from "react";
import { Helmet } from "react-helmet-async";

// can be used to easily insert basic metadata including OpenGraph tags to components 
export default function SEO({ title, description, name, type, determiner, locale, site_name, image, video, audio, url }) {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End Standard Metadata */}
      {/* Facebook Open Graph Tags -> https://ogp.me/ */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:description" content={description} />
      {/* End Facebook Open Graph Tags */}
    </Helmet>
  );
}
