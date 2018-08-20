/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import { Helmet } from 'react-helmet';
import React from 'react';

export const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Kara Logos — A 21kb studios product</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,500i,700"
      rel="stylesheet"
    />
  </Helmet>
);
