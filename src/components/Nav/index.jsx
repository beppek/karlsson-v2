import React from 'react';

import InnerWrapper from './InnerWrapper';

import NavBar from './NavBar';
import NavItem from './NavItem';

const PATHS = {
  home: '/',
  blog: '/blog',
  about: '/about'
};

const Nav = () => {
  let path = '';
  if (window) {
    path = window.location.pathname;
  }
  return (
    <NavBar>
      <InnerWrapper>
        <NavItem selected={path === PATHS.home} to={PATHS.home}>
          Home
        </NavItem>
        <NavItem selected={path.includes(PATHS.blog)} to={PATHS.blog}>
          Blog
        </NavItem>
        <NavItem selected={path.includes(PATHS.about)} to={PATHS.about}>
          About
        </NavItem>
      </InnerWrapper>
    </NavBar>
  );
};

export default Nav;
