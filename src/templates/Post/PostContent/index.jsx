import React from 'react';
import Wrapper from './Wrapper';

const PostContent = ({ html }) => (
  <Wrapper>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Wrapper>
);

export default PostContent;
