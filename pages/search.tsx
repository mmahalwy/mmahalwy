import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PostListing from '../components/PostListing';
import { Title1 } from '../components/dls/Title';

export const meta = {
  title: 'Search',
  tags: ['javascript', 'python'],
  layout: 'page',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This page lists all posts with a given tag.',
};

function Search({ allData = [], router }) {
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
}

export default Search;
