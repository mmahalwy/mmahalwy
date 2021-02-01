import React from 'react';
import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import MainLayout from './layouts/MainLayout';
import Anchor from './dls/Anchor';

const Navigation = () => (
  <MainLayout>
    <Flex>
      <Box>
        <Heading size="md">
          <Link href="/">Mo</Link>
        </Heading>
      </Box>
      <Spacer />
      <HStack spacing="4">
        <Anchor textDecoration="none" href="/blog">
          Blog
        </Anchor>
        <Anchor textDecoration="none" href="/blog/startup-problems">
          Startup ideas
        </Anchor>
        <Anchor textDecoration="none" href="https://twitter.com/mmahalwy">
          Twitter
        </Anchor>
      </HStack>
    </Flex>
  </MainLayout>
);

export default Navigation;
