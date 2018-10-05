import React, { Fragment } from 'react';
import HTMLHead from './HTMLHead';
import Nav from '../components/Nav';

import './index.css';

export default class MainLayout extends React.Component {
  render() {
    const { children, pageTitle } = this.props;
    return (
      <Fragment>
        <HTMLHead pageTitle={pageTitle} />
        <Nav />
        {children}
      </Fragment>
    );
  }
}
