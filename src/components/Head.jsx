import Helmet from 'react-helmet';
import React from 'react';

const Head = () => {
  return (
    <Helmet defaultTitle="Kara Logos &mdash; A 21kb studios product">
      {/* General tags */}
      {/* <meta name="description" content={description} />
      <meta name="image" content={image} /> */}

      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

export default Head;
