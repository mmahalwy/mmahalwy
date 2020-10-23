import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import meAnimationGif from '../public/static/images/me-animation.gif';
import Anchor from './dls/Anchor';

const ConvertkitForm = () => {
  // const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <Box my={4}>
        <hr />
      </Box>
      <Text>
        If you enjoyed this post, feel free to follow me on{' '}
        <Anchor isExternal href="https://twitter.com/mmahalwy">
          Twitter
        </Anchor>{' '}
        or{' '}
        <Anchor isExternal href="mailto:mmahalwy@gmail.com">
          email
        </Anchor>{' '}
        where you can stay up to date on upcoming content and life updates
      </Text>
      <img src={meAnimationGif} width="100%" loading="lazy" alt="alt" />

      {/* <div style={{ display: showEmail ? 'block' : 'none' }}>
        <script async data-uid="e6cae09825" src="https://mmahalwy.ck.page/e6cae09825/index.js" />
      </div> */}
    </>
  );
};

export default ConvertkitForm;
