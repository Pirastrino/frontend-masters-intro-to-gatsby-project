import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.GetAllPostsQuery>(
    graphql`
      query GetAllPosts {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            id
            slug
            frontmatter {
              title
              description
              date(fromNow: true)
            }
          }
        }
      }
    `,
  );

  return allMdx.nodes;
};

export default usePosts;
