import React from 'react';
import { Link, PageProps } from 'gatsby';
import { Seo } from '../components';

const App: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="About" description="About this page" />
      <main>
        <h1>About Page</h1>
        <Link to="/">Back to home</Link>
      </main>
    </>
  );
};

export default App;
