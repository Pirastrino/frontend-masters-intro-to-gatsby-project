import React from 'react';
import { Seo } from '..';
import { Header } from './Header';

// @ts-ignore
import { content } from '../../styles/layout.module.css';
import '../../styles/global.css';

const Layout: React.FC<GatsbyTypes.SiteSiteMetadata> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Seo {...props} />
      <Header title={props.title} />
      <main className={content}>{children}</main>
    </>
  );
};

export default Layout;
