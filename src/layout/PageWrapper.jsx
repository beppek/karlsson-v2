import styled from 'styled-components';
import { colors } from '../constants/colors';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 40px;
  padding-top: 10px;
  min-height: calc(100vh - 170px);
  color: ${colors.text};
`;

export default PageWrapper;
