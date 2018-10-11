import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../../constants/colors';

const borderStyle = 'solid 2px';
const hoverBorderStyle = 'solid 3px';
const activeBorderStyle = 'solid 4px';

const NavItem = styled(Link)`
  display: inline-block;
  text-align: center;
  height: ${props => (props.height ? props.height : '50px')};
  line-height: ${props => (props.height ? props.height : '50px')};
  text-decoration: none;
  color: ${props => (props.selected ? colors.active : colors.inactive)};
  border-bottom: ${props => (props.selected ? activeBorderStyle : borderStyle)};
  border-bottom-color: ${props =>
    props.selected ? colors.active : colors.inactive};
  width: 100px;
  transition: border-bottom 300ms ease-in-out;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    border-bottom: ${props =>
      props.selected ? activeBorderStyle : hoverBorderStyle};
    border-bottom-color: ${colors.hover};
  }
`;

export default NavItem;
