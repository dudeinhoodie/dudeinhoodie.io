import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery } from 'gatsby';

import { SITE_TITLE_QUERY } from 'src/queries/metadata';
import { Footer } from 'src/components/footer';
import Header from './header';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(SITE_TITLE_QUERY);
  const title = data?.site?.siteMetadata?.title ?? 'Title';

  return (
    <Fragment>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
