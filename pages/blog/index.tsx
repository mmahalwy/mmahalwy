import React from 'react';
import PostListing from '../../components/PostListing';

export const meta = {
  title: 'Blog',
  tags: [],
  layout: 'blog-post-list',
  publishDate: '',
  modifiedDate: false,
  seoDescription: 'Blog',
};

function Blog({ allData = [] }) {
  const blogPosts = allData.filter((content) => content.type == 'post');
  return (
    <>
      {blogPosts.map((post, index) => (
        <PostListing key={index} post={post} index={index} />
      ))}
    </>
  );
}

export default Blog;
