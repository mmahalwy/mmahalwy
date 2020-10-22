import React from 'react';
import { ArticleJsonLd, NextSeoProps } from 'next-seo';
import { config } from '../config';

export function articleSEO(postData) {
  if (!postData) return;
  const description = postData.seoDescription
    ? postData.seoDescription
    : config.siteDescription;

  // eslint-disable-next-line consistent-return
  return (
    <ArticleJsonLd
      url={postData.canonicalUrl}
      title={postData.title}
      images={[config.websiteLogo]}
      datePublished={postData.publishDate}
      dateModified={postData.modifiedDate}
      authorName={config.author}
      publisherName={config.author}
      publisherLogo={config.websiteLogo}
      description={description}
    />
  );
}

type DataType = {
  title?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
};

export function createSEOConfig(data: DataType = {}): NextSeoProps {
  const title = data.title || config.defaultPageTitle;
  const description = data.seoDescription
    ? data.seoDescription
    : config.siteDescription;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: data.canonicalUrl,
      title,
      description,
      images: data.images ?? [
        {
          url: config.websiteLogo,
          width: 280,
          height: 280,
          alt: 'mmahalwy',
        },
      ],
      site_name: config.siteName,
    },
    twitter: {
      handle: config.twitterHandle,
      site: config.twitterHandle,
      cardType: config.twitterCardType,
    },
  }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}
