import React, { Component } from 'react';
import FlexBox from '../../commons/FlexBox';
import Wrapper from '../../commons/Wrapper';
import Image from '../../commons/Image';
import Title, { Subtitle } from '../../commons/Title';

class About extends Component {
  render() {
    return (
      <Wrapper>
        <FlexBox justify="center" align="center">
          <Image rounded width="150px" src="/img/beppe_drinking_horn.jpeg" />
        </FlexBox>
        <Title>Max Karlsson</Title>
        <Subtitle>Developer | Futurist</Subtitle>
      </Wrapper>
    );
  }
}

export default About;
