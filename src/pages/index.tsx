import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO/seo';
import Layout from '../components/Layout/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
);

export default IndexPage;
