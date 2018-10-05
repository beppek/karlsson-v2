import React from 'react';
// import { Link } from 'gatsby';
import Wrapper from '../../commons/Wrapper';

import MenuItem from './MenuItem';

const Nav = () => (
  <Wrapper>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/blog">Blog</MenuItem>
  </Wrapper>
);

export default Nav;
