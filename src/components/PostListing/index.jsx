import React from 'react';
import PostListItem from './PostListItem';

import FlexBox from '../../commons/FlexBox';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <FlexBox justify="center" wrap>
        {postList.map(post => (
          <PostListItem post={post} />
        ))}
      </FlexBox>
    );
  }
}

export default PostListing;
