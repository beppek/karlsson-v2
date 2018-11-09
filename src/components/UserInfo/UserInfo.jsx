import React from 'react';
import { Follow } from 'react-twitter-widgets';
import config from '../../../data/SiteConfig';

import Wrapper from '../../commons/Wrapper';

const UserInfo = ({ expanded }) => {
  const { userTwitter } = config;
  return (
    <Wrapper margin="0 auto">
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : 'none' }}
      />
    </Wrapper>
  );
};

export default UserInfo;
