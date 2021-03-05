import React from 'react';
import randomcolor from 'randomcolor';
import { NextPage } from 'next';
import { Box, Heading, Tag, Text } from '@chakra-ui/react';
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
            {post.tag && (
              <Tag
                size="sm"
                mb={1}
                bgColor={randomcolor({
                  luminosity: 'dark',
                  seed: post.tag,
                })}
                // bgGradient={`linear(to-l, ${randomcolor({
                //   luminosity: 'dark',
                //   seed: post.tag,
                // })}, ${randomcolor({
                //   luminosity: 'dark',
                //   seed: `${post.tag}${post.publishDate}`,
                // })})`}
              >
                {post.tag.toUpperCase()}
              </Tag>
            )}
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
