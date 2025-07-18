import React from "react";
import { Helmet } from "react-helmet-async";

// can be used to easily insert basic metadata including OpenGraph tags to components 
export default function SEO({ title, author, description, mimeType, determiner, locale, site_name, image, video, audio, url }) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title ? title : "Untitled"}</title>  
      <meta name="description" content={description} />
      <link rel="icon" href={image} type="image/x-icon" />
      <meta name="author" content={author} />
      <base href={url} />
      {/* Facebook Open Graph Tags -> https://ogp.me/ */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={mimeType} />
      <meta property="og:determiner" content={determiner} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:video" content={video} />
      <meta property="og:audio" content={audio} />
      {/* End Facebook Open Graph Tags */}
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jordytoke.com" />
      <meta property="twitter:url" content="http://jordytoke.com" />
      <meta name="twitter:title" content="Vite + React" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
    </Helmet>
  );
};
