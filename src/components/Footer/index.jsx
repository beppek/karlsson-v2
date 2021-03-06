import React, { Component } from 'react';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Footer.css';

import Text from '../../commons/Text';

// TODO: Use styled components
class Footer extends Component {
  render() {
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <Text>{copyright}</Text>
        </div>
      </footer>
    );
  }
}

export default Footer;
