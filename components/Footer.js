import React from 'react';
import styled from 'styled-components';
import { config } from '../config';

const Container = styled.footer`
  background: #fff;
  height: 80px;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-top: 32px;
`;

function Footer() {
  return <Container>{config.author}</Container>;
}

export default Footer;
