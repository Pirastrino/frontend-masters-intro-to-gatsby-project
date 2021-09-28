import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const Seo: React.FC<Props> = (props) => {
  const defaults = useSiteMetadata();

  const title = props.title || defaults?.title;
  const description = props.description || defaults?.description;
  const image = new URL(
    props.image || defaults?.image || '',
    defaults?.siteUrl,
  ).toString();
  const url = new URL(props.url || '/', defaults?.siteUrl).toString();

  return (
    <Helmet>
      {/* Site Info */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.toString()} />
      {image && <meta name="image" content={image} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
