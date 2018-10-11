import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layout';
import PostListing from '../../components/PostListing';
import SEO from '../../components/SEO/SEO';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout pageTitle="Blog">
        <SEO />
        <PostListing postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
