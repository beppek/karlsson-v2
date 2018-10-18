import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

import Wrapper from './Wrapper';

const PostTags = ({ tags }) => (
  <Wrapper>
    {tags &&
      tags.map(tag => (
        <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
          <button>{tag}</button>
        </Link>
      ))}
  </Wrapper>
);

export default PostTags;
