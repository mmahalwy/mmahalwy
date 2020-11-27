import React from 'react';
import styled from '@emotion/styled';
import { config } from '../config';

const Container = styled.footer`
  background: #000;
  height: 80px;
  width: 100%;
  border-top: 2px solid #f7f7f7;
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
