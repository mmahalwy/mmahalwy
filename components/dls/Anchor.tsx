import styled from 'styled-components';

const Anchor = styled.a`
  color: ${(props) => props.theme.black};
  cursor: pointer;

  &:hover {
    color: rgba(51, 51, 51, 0.7);
  }
`;

export default Anchor;
