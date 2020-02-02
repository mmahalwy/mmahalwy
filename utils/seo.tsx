import React from 'react';
import { ArticleJsonLd, NextSeoProps } from 'next-seo';
import { config } from '../config';

export function articleSEO(postData) {
  if (!postData) return;
  const description = postData.seoDescription ? postData.seoDescription : config.siteDescription;

  return (
    <ArticleJsonLd
      url={postData.canonicalUrl}
      title={postData.title}
      images={[config.websiteLogo]}
      datePublished={postData.formattedPublishDate}
      dateModified={postData.formattedModifiedDate}
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
};

export function createSEOConfig(data = {} as DataType): NextSeoProps {
  const title = data.title || config.defaultPageTitle;
  const description = data.seoDescription ? data.seoDescription : config.siteDescription;

  return {
    title,
    description: description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: data.canonicalUrl,
      title,
      description: description,
      images: [
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
