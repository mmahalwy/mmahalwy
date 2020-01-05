import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainLayoutProps = {
  children: NonNullable<ReactNode>;
};

const Container = styled.div`
  max-width: 740px;
  padding: 20px 20px 100px 20px;
  position: relative;
  margin: 0px auto;
  width: 100%;
`;

const MainLayout = ({ children }: MainLayoutProps) => <Container>{children}</Container>;

export default MainLayout;
