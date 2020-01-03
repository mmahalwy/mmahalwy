import React, { Component } from 'react';
import TagBlock from '../components/Tags';
import ReadingProgress from '../components/ReadingProgress';
import { articleSEO } from '../utils/seo';
import { formatDisplayDate } from '../utils/formatters';

const BlogMeta = ({ data: { pageData } }) => {
  if (!pageData) {
    console.error('pageData not found!');
    return 'Not found';
  }

  const { formattedPublishDate, hideProgressBar } = pageData;

  return (
    <>
      {hideProgressBar ? null : <ReadingProgress />}
      <h1>{pageData.title}</h1>
      <small className="post-date">{formatDisplayDate(formattedPublishDate)}</small>
      <TagBlock tags={pageData.tags} />
      {articleSEO(pageData)}
    </>
  );
};

export default BlogMeta;
