import React, { Component } from 'react';
import styled from 'styled-components';
import TagBlock from '../components/Tags';
import ReadingProgress from '../components/ReadingProgress';
import { articleSEO } from '../utils/seo';
import { formatDisplayDate } from '../utils/formatters';

const Container = styled.div`
  padding-bottom: 1rem;
`;

const BlogMeta = ({ data: { pageData } }) => {
  if (!pageData) {
    console.error('pageData not found!');
    return 'Not found';
  }

  const { formattedPublishDate, hideProgressBar } = pageData;

  return (
    <Container>
      {hideProgressBar ? null : <ReadingProgress />}
      <h1>{pageData.title}</h1>
      <small className="post-date">{formatDisplayDate(formattedPublishDate)}</small>
      <TagBlock tags={pageData.tags} />
      {articleSEO(pageData)}
    </Container>
  );
};

export default BlogMeta;
