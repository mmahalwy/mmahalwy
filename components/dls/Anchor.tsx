import styled from 'styled-components';
import { OutboundLink } from 'react-ga';

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

export const OutboundAnchor = styled(OutboundLink)`
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
