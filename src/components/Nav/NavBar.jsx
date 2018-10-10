import styled from 'styled-components';

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.height ? props.height : '50px')};
  text-align: center;
`;

export default NavBar;
