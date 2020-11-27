import React from 'react';
import { Badge, Box } from '@chakra-ui/react';
import Anchor from './dls/Anchor';

type TagBlockProps = {
  tags: string[];
};

const TagBlock = ({ tags }: TagBlockProps) => {
  if (!tags || !Array.isArray(tags)) return null;

  const alphabetizedTags = tags.sort();

  return (
    <Box mb={2}>
      {alphabetizedTags.map((tag) => (
        <Anchor href={`/search?q=${tag}`} key={`${tag}-link`}>
          <Badge mr={2}>{tag}</Badge>
        </Anchor>
      ))}
    </Box>
  );
};

export default TagBlock;
