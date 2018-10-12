import styled from 'styled-components';
import { colors } from '../../constants/colors';

const NavBar = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: calc((100% - 100vw) + 10px);
  height: ${props => (props.height ? props.height : '49px')};
  text-align: center;
  background-color: ${colors.background};
`;

export default NavBar;
