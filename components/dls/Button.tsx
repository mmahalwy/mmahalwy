import styled from 'styled-components';
import { rgba } from 'polished';

const Button = styled.a`
  color: ${(props) => props.theme.white};
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    color: ${(props) => rgba(props.theme.white, props.theme.opacity)};
  }
`;

export default Button;
