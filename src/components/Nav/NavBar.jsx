import styled from 'styled-components';
import { colors } from '../../constants/colors';

const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.height ? props.height : '60px')};
  text-align: center;
  background-color: ${colors.background};
`;

export default NavBar;
