import React from 'react';
import styled from 'styled-components';

const Container = styled.figure`
  margin-left: 0;
  margin-right: 0;
`;
const Caption = styled.figcaption`
  text-align: center;
  font-size: 12px;
  margin-top: 8px;
`;
const Image = styled.img`
  width: 100%;
`;

const Figure = ({ src, alt, caption }) => (
  <Container>
    <Image src={src} alt={alt} />
    <Caption>{caption}</Caption>
  </Container>
);

export default Figure;
