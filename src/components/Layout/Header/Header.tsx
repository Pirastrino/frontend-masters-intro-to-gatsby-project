import React from 'react';
import { Link } from 'gatsby';

// @ts-ignore
import { header } from '../../../styles/layout.module.css';

const Header: React.FC<Partial<GatsbyTypes.SiteSiteMetadata>> = ({ title }) => {
  return (
    <header className={header}>
      <Link to="/">{title || 'Home'}</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
