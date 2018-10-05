import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuItem = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  background-color: blue;
  color: white;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: green;
  }
`;

export default MenuItem;
