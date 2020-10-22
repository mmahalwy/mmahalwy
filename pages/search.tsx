import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Heading } from '@chakra-ui/core';
import MainLayout from '../components/layouts/MainLayout';
import PostListing from '../components/PostListing';
import BlogEngine from '../utils/blog-engine';

export const meta = {
  title: 'Search',
  tags: ['javascript', 'python'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This page lists all posts with a given tag.',
};

const Search: NextPage<any> = ({ allData = [] }) => {
  const router = useRouter();

  const renderListItems = (posts) => {
    const tagTopic = router.query.q;

    const items = posts
      .filter((post) => (post.tags ? post.tags.includes(tagTopic) : false))
      .map((post, index) => (
        <PostListing key={index} post={post} index={index} />
      ));

    if (items.length) {
      return items;
    }
    return <h2 key="not-found-headline">No results</h2>;
  };
  const blogPosts = allData.filter((content) => content.type == 'post');

  return (
    <MainLayout>
      <Heading>Posts tagged: {router.query.q}</Heading>
      {renderListItems(blogPosts)}
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const allData = BlogEngine();

  return { props: { allData } };
};

export default Search;
