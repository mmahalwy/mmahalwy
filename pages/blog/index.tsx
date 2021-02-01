import React from 'react';
import { NextPage } from 'next';
import PostListing from '../../components/PostListing';
import { getAllFilesFrontMatter } from '../../utils/mdx';

const Blog: NextPage<any> = ({ posts = [] }) => {
  const allPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishDate)) - Number(new Date(a.publishDate))
    )
    .filter((p) => !p.exclude);

  return (
    <>
      {allPosts.map((post) => (
        <PostListing key={post.title} post={post} />
      ))}
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Blog;
