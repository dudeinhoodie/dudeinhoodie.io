import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO/seo';
import Layout from '../components/Layout/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
