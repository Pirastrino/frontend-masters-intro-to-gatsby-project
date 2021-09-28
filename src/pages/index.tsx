import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks';

const App: React.FC = () => {
  const data = useSiteMetadata();

  return (
    // TODO: Find better solution then data!
    <Layout {...data!}>
      <h1>Hello Frontend Masters</h1>
    </Layout>
  );
};

export default App;
