import React, { useState } from 'react';
import Spacing from './dls/Spacing';
import Text from './dls/Text';
import Anchor from './dls/Anchor';
import meAnimationGif from '../public/static/images/me-animation.gif';

const ConvertkitForm = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <Spacing my={4}>
        <hr />
      </Spacing>
      <Text>
        If you enjoyed this post, feel free to follow me on{' '}
        <Anchor href="https://twitter.com/mmahalwy">Twitter</Anchor> or{' '}
        <Anchor href="mailto:mmahalwy@gmail.com" target="_blank">
          email
        </Anchor>{' '}
        where you can stay up to date on upcoming content and life updates
      </Text>
      <img src={meAnimationGif} width="100%" loading="lazy" />

      {/* <div style={{ display: showEmail ? 'block' : 'none' }}>
        <script async data-uid="e6cae09825" src="https://mmahalwy.ck.page/e6cae09825/index.js" />
      </div> */}
    </>
  );
};

export default ConvertkitForm;
