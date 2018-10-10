import styled from 'styled-components';

const Text = styled.p`
  color: ${props => (props.color ? props.color : '#424242')};
  text-align: ${props => (props.align ? props.align : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)}px;
`;

export default Text;
