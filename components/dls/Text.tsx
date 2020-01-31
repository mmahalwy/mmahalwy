import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => props.fontSize || 18}px;
  line-height: 24px;
  word-break: break-word; /* This prevents a bug with the reading progress bar. Leave this style here unless you are removing the reading progress bar. */
`;

export default Text;
