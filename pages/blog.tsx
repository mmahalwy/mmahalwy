import React from 'react';
import PostListing from '../components/PostListing';

export const meta = {
  title: 'Blog',
  tags: ['Next.js', 'MDX'],
  layout: 'blog-post-list',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription:
    'All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`.',
};

function Blog({ allData = [] }) {
  const blogPosts = allData.filter((content) => content.type == 'post');
  return (
    <div className="blog-post-list">
      {blogPosts.map((post, index) => (
        <PostListing key={index} post={post} index={index} />
      ))}
    </div>
  );
}

export default Blog;
