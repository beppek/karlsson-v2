import React from 'react';
import Title from '../../../commons/Title';
import Image from '../../../commons/Image';
import FlexBox from '../../../commons/FlexBox';

const PostHeader = ({ post }) => (
  <FlexBox lign="center" width="100%">
    <Image fit src={post.cover} />
    <Title>{post.title}</Title>
  </FlexBox>
);

export default PostHeader;
