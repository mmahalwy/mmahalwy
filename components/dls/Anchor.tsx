import styled from 'styled-components';
import { rgba } from 'polished';

const Anchor = styled.a`
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    color: ${(props) => rgba(props.theme.white, props.theme.opacity)};
  }
`;

export default Anchor;
