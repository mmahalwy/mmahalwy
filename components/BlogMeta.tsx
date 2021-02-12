/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NextSeo } from 'next-seo';
import { Box, Heading, Text } from '@chakra-ui/react';
import TagBlock from './Tags';
import { articleSEO, createSEOConfig } from '../utils/seo';
import { formatDisplayDate, formatSEODate } from '../utils/formatters';

type BlogMetaProps = {
  meta: {
    publishDate: string;
    title: string;
    tags: string[];
    readingTime: {
      text: string;
      minutes: number;
      time: number;
      words: number;
    };
  };
};

const BlogMeta = ({ meta }: BlogMetaProps) => {
  if (!meta) {
    console.error('meta not found!');
    return <>Not found</>;
  }

  const formattedPublishDate = formatSEODate(meta.publishDate);

  return (
    <Box py={10}>
      <NextSeo {...createSEOConfig(meta)} />
      <Heading>{meta.title}</Heading>
      <Text>
        <small className="post-date">
          {formatDisplayDate(formattedPublishDate)} • {meta.readingTime.text}
        </small>
      </Text>
      <TagBlock tags={meta.tags} />
      {articleSEO(meta)}
    </Box>
  );
};

export default BlogMeta;
