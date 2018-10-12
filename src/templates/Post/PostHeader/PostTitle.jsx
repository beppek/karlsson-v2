import styled from 'styled-components';
import { colors } from '../../../constants/colors';

const PostTitle = styled.div`
  background-color: ${colors.background};
  border-radius: 1px;
  padding: 5px 10px;
  color: ${colors.active};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PostTitle;
