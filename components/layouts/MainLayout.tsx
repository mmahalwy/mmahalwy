import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type MainLayoutProps = {
  children: NonNullable<ReactNode>;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <Box
    width="100%"
    margin="0px auto"
    position="relative"
    padding="20px"
    maxWidth="740px"
  >
    {children}
  </Box>
);

export default MainLayout;
