import get from 'lodash/get';
import SearchLayout from '../components/layouts/SearchLayout';
import BlogLayout from '../components/layouts/BlogLayout';
import { LAYOUT_TYPES } from '../utils/constants';

export function renderLayout(props) {
  const { Component, postData } = props;

  switch (get(postData, 'layout')) {
    case LAYOUT_TYPES['POST']:
      return (
        <BlogLayout>
          <Component {...props} postData={postData} />
        </BlogLayout>
      );
    case LAYOUT_TYPES['SEARCH']:
      return (
        <SearchLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </SearchLayout>
      );
    case LAYOUT_TYPES['BLOG-POST-LIST']:
      return (
        <BlogLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </BlogLayout>
      );
    case LAYOUT_TYPES['PAGE']:
    default:
      return (
        <BlogLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </BlogLayout>
      );
  }
}
