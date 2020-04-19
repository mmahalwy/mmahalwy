import styled from 'styled-components';
import { rgba } from 'polished';

const Anchor = styled.a`
  color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => rgba(props.theme.white, props.theme.opacity)};
    text-decoration: none;
  }
`;

export default Anchor;
