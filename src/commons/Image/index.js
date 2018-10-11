import styled from 'styled-components';

const Image = styled.img`
  border-radius: ${props => (props.rounded ? '50%' : '0')};
  ${props => props.width && `max-width: ${props.width};`};
  ${props => props.height && `max-height: ${props.height};`};
  ${props => props.fit && 'object-fit: cover;'};
`;

export default Image;
