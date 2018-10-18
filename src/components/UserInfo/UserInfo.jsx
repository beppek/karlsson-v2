import React from 'react';
import { Follow } from 'react-twitter-widgets';
import config from '../../../data/SiteConfig';

const UserInfo = ({ expanded }) => {
  const { userTwitter } = config;
  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : 'none' }}
    />
  );
};

export default UserInfo;
