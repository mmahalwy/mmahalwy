/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NextSeo } from 'next-seo';
import { Box, Heading, Text } from '@chakra-ui/core';
import TagBlock from './Tags';
import { articleSEO, createSEOConfig } from '../utils/seo';
import { formatDisplayDate, formatSEODate } from '../utils/formatters';

type BlogMetaProps = {
  meta: {
    publishDate: string;
    title: string;
    tags: string[];
  };
};

const BlogMeta = ({ meta }: BlogMetaProps) => {
  if (!meta) {
    console.error('meta not found!');
    return <>Not found</>;
  }

  const formattedPublishDate = formatSEODate(meta.publishDate);

  return (
    <Box py={20} textAlign="center">
      <NextSeo {...createSEOConfig(meta)} />
      <Heading>{meta.title}</Heading>
      <Text>
        <small className="post-date">
          {formatDisplayDate(formattedPublishDate)}
        </small>
      </Text>
      <TagBlock tags={meta.tags} />
      {articleSEO(meta)}
    </Box>
  );
};

export default BlogMeta;
