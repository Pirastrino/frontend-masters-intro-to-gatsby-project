import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            url
            title
            description
            image
          }
        }
      }
    `,
  );

  return site?.siteMetadata;
};

export default useSiteMetadata;
