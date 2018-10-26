import styled from 'styled-components';
import { colors } from '../../constants/colors';

const Chip = styled.button`
  cursor: pointer;
  align-items: center;
  background-color: ${colors.link};
  color: ${colors.background};
  border: 0;
  border-radius: 16px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  transition-duration: 0.15s;
  transition-property: box-shadow, background-color;
  vertical-align: top;
  white-space: nowrap;
  margin: ${props => (props.margin ? props.margin : 0)};

  &:hover {
    background-color: ${colors.active};
  }
`;

export default Chip;
