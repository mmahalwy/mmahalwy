import React from 'react';
import styled from 'styled-components';

import { Heading, Text } from '@chakra-ui/core';
import TagBlock from './Tags';
import { PostDataType } from '../types/PostDataType';
import Anchor from './dls/Anchor';

const Container = styled.div`
  padding: 0.5rem 0rem;
`;

type PostListingType = {
  post: PostDataType;
};

function PostListing({ post }: PostListingType) {
  return (
    <Container key={post.title}>
      <Heading>
        <Anchor href={`/blog/${post.name}`}>{post.title}</Anchor>
      </Heading>
      <Text>{post.seoDescription}</Text>
      <Text fontSize={12}>{post.publishDate}</Text>
      <TagBlock tags={post.tags} />
    </Container>
  );
}

export default PostListing;
