import React, { Fragment, Component } from 'react';
import HTMLHead from './HTMLHead';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import PageWrapper from './PageWrapper';

import './index.css';

export default class MainLayout extends Component {
  render() {
    const { children, pageTitle } = this.props;
    return (
      <Fragment>
        <HTMLHead pageTitle={pageTitle} />
        <Nav />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </Fragment>
    );
  }
}
