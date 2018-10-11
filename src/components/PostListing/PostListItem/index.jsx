import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

import Image from '../../../commons/Image';
import Wrapper from '../../../commons/Wrapper';
import InnerWrapper from './InnerWrapper';
import PostListTitle from './PostListTitle';
import PostExcerpt from './PostExcerpt';
import PostDate from './PostDate';
import TimeToRead from './TimeToRead';

const PostListItem = ({ post }) => {
  console.log(post);
  return (
    <Wrapper margin="0 10px 20px">
      <Link to={post.path} key={post.title}>
        <InnerWrapper float="left" width="600px" height="400px">
          <Image fit width="100%" height="250px" src={post.cover} />
          <PostListTitle>{post.title}</PostListTitle>
          <PostDate>{moment(post.date).format('LL')}</PostDate>
          <PostExcerpt>{post.excerpt}</PostExcerpt>
          <TimeToRead>Reading time: {post.timeToRead} min</TimeToRead>
        </InnerWrapper>
      </Link>
    </Wrapper>
  );
};

export default PostListItem;
