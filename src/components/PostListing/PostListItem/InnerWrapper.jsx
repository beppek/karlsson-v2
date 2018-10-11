import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export default styled.div`
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.2), 1px 2px 20px 0 rgba(0, 0, 0, 0.19);
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

  /* &::after {
  } */

  &:hover {
    box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.16),
      3px 4px 25px 2px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease-in-out;
    transform: scale(1.005, 1.005);
  }

  /* &:hover::after {
    opacity: 1;
  } */
`;
