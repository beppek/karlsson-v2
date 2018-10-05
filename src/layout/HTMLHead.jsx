import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';

const HTMLHead = ({ pageTitle }) => {
  const title = `${pageTitle ? `${pageTitle} | ` : ''} ${config.siteTitle}`;
  return (
    <Fragment>
      <Helmet title={title}>
        <meta name="description" content={config.siteDescription} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <SEO />
    </Fragment>
  );
};

export default HTMLHead;
