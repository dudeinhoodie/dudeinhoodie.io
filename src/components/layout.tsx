import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { Footer } from './footer';
import Header from './header';

import './layout.css';

type Props = {
  children: any;
}

const SITE_META_DATA = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children } = props;
  const data = useStaticQuery(SITE_META_DATA);
  const title = data?.site?.siteMetadata?.title ?? 'Title';

  return (
    <Fragment>
      <Header siteTitle={title} />
      <div>
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
