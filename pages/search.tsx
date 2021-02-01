import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import MainLayout from '../components/layouts/MainLayout';
import PostListing from '../components/PostListing';

const Search: NextPage<any> = ({ allData = [] }) => {
  const router = useRouter();

  const renderListItems = (posts) => {
    const tagTopic = router.query.q;

    const items = posts
      .filter((post) => (post.tags ? post.tags.includes(tagTopic) : false))
      .map((post) => <PostListing key={post.title} post={post} />);

    if (items.length) {
      return items;
    }
    return <h2 key="not-found-headline">No results</h2>;
  };
  const blogPosts = allData.filter((content) => content.type === 'post');

  return (
    <MainLayout>
      <Heading>Posts tagged: {router.query.q}</Heading>
      {renderListItems(blogPosts)}
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  return { props: { allData: [] } };
};

export default Search;
