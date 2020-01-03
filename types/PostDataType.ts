import { ReactElement } from 'react';

export type PostDataType = {
  Component: ReactElement;
  title: string;
  tags: string[];
  layout: string;
  publishDate: string;
  formattedPublishDate: string;
  modifiedDate: string;
  formattedModifiedDate: string;
  seoDescription: string;
  exclude: any;
  urlPath: string;
  fullUrlPath: string;
  canonicalUrl: string;
  hideProgressBar: boolean;
  name: string;
  type: string;
  secondsSinceEpoch: number;
};
