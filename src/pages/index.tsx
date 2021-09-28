import React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components';

const App: React.FC = () => {
  return (
    <>
      <Seo />
      <main>
        <h1>Hello Frontend Masters</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
};

export default App;
