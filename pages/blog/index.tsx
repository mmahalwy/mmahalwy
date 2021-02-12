import React from 'react';
import { NextPage } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { getAllFilesFrontMatter } from '../../utils/mdx';
import Anchor from '../../components/dls/Anchor';
import TagBlock from '../../components/Tags';

const Blog: NextPage<any> = ({ posts = [] }) => {
  const allPosts = posts
    .filter((p) => !p.exclude)
    .sort(
      (a, b) =>
        Number(new Date(b.publishDate)) - Number(new Date(a.publishDate))
    );

  return (
    <Box mt={10}>
      {allPosts.map((post) => (
        <Box key={post.title} mb={8}>
          <Anchor
            _hover={{ textDecoration: 'none' }}
            textDecoration="none"
            href={`/blog/${post.slug}`}
          >
            <Heading size="md">{post.title}</Heading>
            <Text color="gray.400">{post.seoDescription}</Text>
            <Text fontSize={12} color="gray.400">
              {dayjs(post.publishDate).format('MMM D, YYYY')}
            </Text>
            <TagBlock tags={post.tags} />
          </Anchor>
        </Box>
      ))}
    </Box>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Blog;
