/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Layout(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {favicon, tagline, title: defaultTitle} = siteConfig;
  const {children, title, description} = props;
  const faviconUrl = useBaseUrl(favicon);
  return (
    <React.Fragment>
      <Head defaultTitle={`${defaultTitle} · ${tagline}`}>
        {title && <title>{`${title} · ${tagline}`}</title>}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
      </Head>
      {children}
    </React.Fragment>
  );
}

export default Layout;
