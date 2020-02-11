import { formatSEODate, getSecondsSinceEpoch } from './formatters';
import { config } from '../config';

const ignoreList = ['index.tsx', 'test.tsx', 'list.json'];

const postFileNames = (): string[] => {
  const postFileNames = require('../pages/blog/list.json') || [];
  const filteredFileNames = postFileNames.filter((name) => !name || !ignoreList.includes(name));

  return filteredFileNames;
};

const createPostList = (fileNameList) => {
  return fileNameList.reduce((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const {
      default: Component,
      meta: {
        title,
        tags,
        layout,
        publishDate,
        modifiedDate,
        seoDescription,
        hideProgressBar = false,
        exclude = false,
        ...moreMeta // any extra properties a post may have
      },
    } = require(`../pages/blog/${name}`);

    if (exclude) return collection;

    // remove the extension from the file name to make a component name string
    const cleaned_name = name.split('.')[0];

    // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.
    const formattedPublishDate = formatSEODate(publishDate);

    const formattedModifiedDate = formatSEODate(modifiedDate, true);

    // This is used to sort pages/posts
    const secondsSinceEpoch = getSecondsSinceEpoch(formattedPublishDate);

    // data that is returned for each page
    collection.push({
      title,
      tags,
      layout,
      publishDate,
      formattedPublishDate,
      modifiedDate,
      formattedModifiedDate,
      seoDescription,
      exclude,
      urlPath: `/${cleaned_name}`,
      fullUrlPath: `/blog/${cleaned_name}`,
      canonicalUrl: `${config.baseUrl}/${cleaned_name}`,
      hideProgressBar,
      name: cleaned_name,
      type: 'post',
      secondsSinceEpoch,
      ...moreMeta, // any extra properties a post may have
    });

    return collection;
  }, []);
};

export function posts(): any[] {
  const fileNameList = postFileNames();

  const postList = createPostList(fileNameList);
  const sortedList = postList.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();

  return sortedList;
}
