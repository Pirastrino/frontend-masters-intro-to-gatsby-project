import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `,
  );

  return site?.siteMetadata;
};

export default useSiteMetadata;
