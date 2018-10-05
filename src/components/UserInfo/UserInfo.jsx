import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';
import config from '../../../data/SiteConfig';

class UserInfo extends Component {
  render() {
    const { userTwitter } = config;
    const { expanded } = this.props;
    return (
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : 'none' }}
      />
    );
  }
}

export default UserInfo;
