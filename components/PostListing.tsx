import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import TagBlock from './Tags';
import { PostDataType } from '../types/PostDataType';
import Title from './dls/Title';
import Text from './dls/Text';
import Anchor from './dls/Anchor';

const Container = styled.div`
  padding: 1rem 0rem;
`;

type PostListingType = {
  post: PostDataType;
  index: number;
};

function PostListing({ post, index }: PostListingType) {
  return (
    <Container key={post.title}>
      <Title>
        <Link href={`/blog/${post.name}`}>
          <Anchor href={`/blog/${post.name}`}>{post.title}</Anchor>
        </Link>
      </Title>
      <Text>{post.seoDescription}</Text>
      <Text fontSize={12}>{post.publishDate}</Text>
      <TagBlock tags={post.tags} />
    </Container>
  );
}

export default PostListing;
