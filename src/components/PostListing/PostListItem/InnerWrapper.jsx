import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default styled.div`
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'none')};
  top: ${props => (props.top ? props.top : 'auto')};
  left: ${props => (props.left ? props.left : 'auto')};
  /* position: ${props => (props.pos ? props.pos : 'static')}; */
  float: ${props => (props.float ? props.float : 'none')};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  overflow-x: ${props => (props.scrollablex ? 'auto' : 'visible')};
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${colors.background};
  z-index: 1;
  position: relative;
  border: solid 1px ${colors.inactive};

  /* &::after {
  } */

  &:hover {
    border-color: ${colors.hover};
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.16),
      1px 1px 15px 0 rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease-in-out;
    transform: scale(1.005, 1.005);
  }

  /* &:hover::after {
    opacity: 1;
  } */
`;
