import React from 'react';
import { Link } from 'gatsby';

const Header: React.FC<Partial<GatsbyTypes.SiteSiteMetadata>> = ({ title }) => {
  return (
    <header>
      <Link to="/">{title || 'Home'}</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
