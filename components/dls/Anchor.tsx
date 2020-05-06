import styled from 'styled-components';

const Anchor = styled.a`
  color: ${(props) => props.theme.black};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.black};
    text-decoration: underline;
  }
`;

export default Anchor;
