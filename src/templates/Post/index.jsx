import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../../layout';

import UserInfo from '../../components/UserInfo/UserInfo';
import Disqus from '../../components/Disqus/Disqus';
import SEO from '../../components/SEO/SEO';
import FlexBox from '../../commons/FlexBox';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostMeta from './PostMeta';

import config from '../../../data/SiteConfig';

import '../b16-tomorrow-dark.css';
import './post.css';

const PostTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  console.log(postNode);
  console.log(post);
  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <FlexBox wrap="wrap" width="100%">
        <PostHeader post={post} />
        <PostContent html={postNode.html} />
        <PostMeta slug={slug} post={post} postNode={postNode} />
        <UserInfo config={config} />
        {/* <Disqus postNode={postNode} /> */}
      </FlexBox>
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
