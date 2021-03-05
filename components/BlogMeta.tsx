/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import randomcolor from 'randomcolor';
import { NextSeo } from 'next-seo';
import { Box, Heading, Tag, Text } from '@chakra-ui/react';
import { BlogSeo, createSEOConfig } from '../utils/seo';
import { formatDisplayDate, formatSEODate } from '../utils/formatters';

type BlogMetaProps = {
  meta: {
    publishDate: string;
    title: string;
    tag: string;
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
      <BlogSeo data={meta} />
      <Heading as="h1">{meta.title}</Heading>
      <Text>
        <small className="post-date">
          {formatDisplayDate(formattedPublishDate)} • {meta.readingTime.text}
        </small>
      </Text>
      {meta.tag && (
        <Tag
          size="sm"
          mt={1}
          bgColor={randomcolor({
            luminosity: 'dark',
            seed: meta.tag,
          })}
          // bgGradient={`linear(to-l, ${randomcolor({
          //   luminosity: 'dark',
          //   seed: meta.tag,
          // })}, ${randomcolor({
          //   luminosity: 'dark',
          //   seed: `${meta.tag}${meta.publishDate}`,
          // })})`}
        >
          {meta.tag.toUpperCase()}
        </Tag>
      )}
    </Box>
  );
};

export default BlogMeta;
