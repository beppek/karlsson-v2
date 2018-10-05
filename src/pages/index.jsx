import React, { Component } from 'react';
import Layout from '../layout';
import logo from '../logo.png';
import Image from '../commons/Image';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Image src={logo} />
      </Layout>
    );
  }
}

export default Index;
