import React, { Component } from 'react';
import styled from 'styled-components';
import TagBlock from '../components/Tags';
import ReadingProgress from '../components/ReadingProgress';
import { articleSEO } from '../utils/seo';
import { formatDisplayDate, formatSEODate } from '../utils/formatters';
import Text from './dls/Text';

const Container = styled.div`
  padding-bottom: 1rem;
`;

// remove the extension from the file name to make a component name string
// const cleaned_name = name.split('.')[0];

// format dates for SEO, but preserve publishDate as the latter is
// displayed on the blog post. Currently not displaying modifiedDate, but
// preserving it for possible future use.
// const formattedPublishDate = formatSEODate(publishDate);

// const formattedModifiedDate = formatSEODate(modifiedDate, true);

// // This is used to sort pages/posts
// const secondsSinceEpoch = getSecondsSinceEpoch(formattedPublishDate);

const BlogMeta = ({ meta }) => {
  if (!meta) {
    console.error('meta not found!');
    return <>Not found</>;
  }

  const formattedPublishDate = formatSEODate(meta.publishDate);

  return (
    <Container>
      {meta.hideProgressBar ? null : <ReadingProgress />}
      <h1>{meta.title}</h1>
      <Text>
        <small className="post-date">{formatDisplayDate(formattedPublishDate)}</small>
      </Text>
      <TagBlock tags={meta.tags} />
      {articleSEO(meta)}
    </Container>
  );
};

export default BlogMeta;
