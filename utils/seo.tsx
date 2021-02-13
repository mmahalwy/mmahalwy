import React from 'react';
import { BlogJsonLd, NextSeoProps } from 'next-seo';
import { config } from '../config';

type DataType = {
  title?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  slug?: string;
  publishDate?: string;
  modifiedDate?: string;
};

const getImage = (data: DataType = {}) => {
  if (data.imageUrl) {
    return [{ url: data.imageUrl, width: 600, height: 300, alt: data.title }];
  }

  if (data.slug) {
    return [
      {
        url: `/api/blog-image/${data.slug}`,
        width: 600,
        height: 300,
        alt: data.title,
      },
    ];
  }

  return [
    {
      url: config.websiteLogo,
      width: 280,
      height: 280,
      alt: 'mmahalwy',
    },
  ];
};

export function BlogSeo({ data }: { data: DataType }) {
  if (!data) return null;

  const description = data.seoDescription
    ? data.seoDescription
    : config.siteDescription;

  return (
    <BlogJsonLd
      url={data.canonicalUrl}
      title={data.title}
      images={getImage(data).map((file) => file.url)}
      datePublished={data.publishDate}
      dateModified={data.modifiedDate}
      authorName={config.author}
      description={description}
    />
  );
}

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
      images: getImage(data),
      site_name: config.siteName,
    },
    twitter: {
      handle: config.twitterHandle,
      site: config.twitterHandle,
      cardType: config.twitterCardType,
    },
  }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}
