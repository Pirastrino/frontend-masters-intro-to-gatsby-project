import React from 'react';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks';

const About: React.FC = () => {
  const data = useSiteMetadata();

  return (
    // TODO: Find better solution then data!
    <Layout {...data!}>
      <h1>About Page</h1>
    </Layout>
  );
};

export default About;
