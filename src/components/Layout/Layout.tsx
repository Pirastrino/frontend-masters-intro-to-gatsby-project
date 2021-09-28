import React from 'react';
import { Seo } from '..';
import { Header } from './Header';

const Layout: React.FC<GatsbyTypes.SiteSiteMetadata> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Seo {...props} />
      <Header title={props.title} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
