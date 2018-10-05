import React, { Component } from 'react';
import Layout from '../layout';
import About from '../components/About/About';

class AboutPage extends Component {
  render() {
    return (
      <Layout pageTitle="About">
        <div className="about-container">
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
