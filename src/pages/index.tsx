import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { useSiteMetadata, usePosts } from '../hooks';

const App: React.FC = () => {
  const site = useSiteMetadata();
  const posts = usePosts();

  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      url={site?.url}
      image={site?.image}
    >
      <h1>Hello Frontend Masters</h1>
      <h2>Check out my recent blog posts</h2>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.slug!}>{post.frontmatter?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default App;
