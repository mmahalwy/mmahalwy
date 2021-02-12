import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Anchor from './dls/Anchor';

const DisplayImage = styled(Image)`
  border-radius: 50%;
  margin-bottom: 16px;
`;

const ConvertkitForm = () => {
  // const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <Box my={4}>
        <hr />
      </Box>
      <Text py={4}>
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
      <DisplayImage
        src="/static/images/me.jpg"
        width="50px"
        height="50px"
        alt="alt"
        objectFit="cover"
      />

      {/* <div style={{ display: showEmail ? 'block' : 'none' }}>
        <script async data-uid="e6cae09825" src="https://mmahalwy.ck.page/e6cae09825/index.js" />
      </div> */}
    </>
  );
};

export default ConvertkitForm;
