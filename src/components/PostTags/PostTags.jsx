import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

import Chip from '../../commons/Chip';
import UnstyledLink from '../../commons/Links/UnstyledLink';

import Wrapper from './Wrapper';

const PostTags = ({ tags }) => (
  <Wrapper>
    {tags &&
      tags.map(tag => (
        <UnstyledLink key={tag} to={`/tags/${_.kebabCase(tag)}`}>
          <Chip margin="0 5px">{tag}</Chip>
        </UnstyledLink>
      ))}
  </Wrapper>
);

export default PostTags;
