import React from 'react';
import styled from '@emotion/styled';

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

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

const Figure = ({ src, alt, caption }: FigureProps) => (
  <Container>
    <Image src={src} alt={alt} />
    {caption && <Caption>{caption}</Caption>}
  </Container>
);

export default Figure;
