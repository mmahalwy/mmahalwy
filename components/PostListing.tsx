import React from 'react';
import Link from 'next/link';
import TagBlock from './Tags';
import { PostDataType } from '../types/PostDataType';
import Title from './dls/Title';
import Text from './dls/Text';
import Anchor from './dls/Anchor';

type PostListingType = {
  post: PostDataType;
  index: number;
};

function PostListing({ post, index }: PostListingType) {
  return (
    <React.Fragment key={post.title}>
      <Title>
        <Link href={`/blog/${post.name}`}>
          <Anchor>{post.title}</Anchor>
        </Link>
      </Title>
      <Text>{post.seoDescription}</Text>
      <TagBlock tags={post.tags} />
    </React.Fragment>
  );
}

export default PostListing;
