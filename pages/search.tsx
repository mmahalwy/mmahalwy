import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';
import PostListing from '../components/PostListing';
import { Title1 } from '../components/dls/Title';
import { NextPage } from 'next';
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
      .map((post, index) => <PostListing key={index} post={post} index={index} />);

    if (items.length) {
      return items;
    } else {
      return <h2 key="not-found-headline">No results</h2>;
    }
  };
  const blogPosts = allData.filter((content) => content.type == 'post');

  return (
    <MainLayout>
      <Title1>Posts tagged: {router.query.q}</Title1>
      {renderListItems(blogPosts)}
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const allData = BlogEngine();

  return { props: { allData } };
};

export default Search;
