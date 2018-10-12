import React from 'react';
import Title from '../../../commons/Title';
import Image from '../../../commons/Image';
import InnerWrapper from './InnerWrapper';
import PostTitle from './PostTitle';

const PostHeader = ({ post }) => (
  <InnerWrapper>
    <Image height="300px" width="100%" fit src={post.cover} />
    <PostTitle>
      <Title>{post.title}</Title>
    </PostTitle>
  </InnerWrapper>
);

export default PostHeader;
