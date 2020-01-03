import React from 'react';
import Link from 'next/link';
import TagBlock from './Tags';
import { PostDataType } from '../types/PostDataType';

type PostListingType = {
  post: PostDataType;
  index: number;
};

function PostListing({ post, index }: PostListingType) {
  return (
    <React.Fragment key={post.title}>
      <h2>
        <Link href={`/blog/${post.name}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <p>{post.seoDescription}</p>
      <TagBlock tags={post.tags} />
    </React.Fragment>
  );
}

export default PostListing;
