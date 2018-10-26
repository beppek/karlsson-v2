import styled from 'styled-components';

const InnerWrapper = styled.div`
  float: right;
  height: ${props => (props.height ? props.height : '50px')};
  margin-right: 25px;
  font-family: Helvetica, sans-serif;
`;

export default InnerWrapper;
