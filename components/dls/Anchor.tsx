/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { OutboundLink } from 'react-ga';

const Anchor = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href } = props;
  // eslint-disable-next-line react/prop-types
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link _hover={{ textDecoration: 'underline' }} {...props} />
      </NextLink>
    );
  }

  return (
    <Link as={OutboundLink} textDecoration="underline" isExternal {...props} />
  );
};

export default Anchor;
