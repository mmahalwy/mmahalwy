/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import {
  Heading,
  Text,
  Link,
  Box,
  Divider,
  Code,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import BlogMeta from './BlogMeta';
import ConvertkitForm from './ConvertkitForm';
import Anchor from './dls/Anchor';
import Figure from './Figure';

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const components = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="l" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="m" my={4} {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  a: Anchor,
  Anchor: Link,
  hr: Hr,
  OutboundAnchor: Anchor,
  inlineCode: Code,
  BlogMeta,
  ConvertkitForm,
  Figure,
  // wrapper: (props) => (
  //   <>
  //     {console.log(props)}
  //     <BlogMeta meta={props.meta} />
  //     <main {...props} />
  //     <ConvertkitForm />
  //   </>
  // ),
};

export default components;
