import React from 'react';
import { NextPage } from 'next';
import PostListing from '../../components/PostListing';
import BlogEngine from '../../utils/blog-engine';

export const meta = {
  title: 'Blog',
  tags: [],
  layout: 'blog-post-list',
  description: 'Blog',
  publishDate: '',
  modifiedDate: false,
  seoDescription: 'Blog',
};

const Blog: NextPage<any> = ({ allData = [] }) => {
  const blogPosts = allData.filter((content) => content.type === 'post');

  return (
    <>
      {blogPosts.map((post) => (
        <PostListing key={post.title} post={post} />
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const allData = BlogEngine();

  return { props: { allData } };
};

export default Blog;
