import get from 'lodash/get';
import SearchLayout from '../components/layouts/SearchLayout';
import MainLayout from '../components/layouts/MainLayout';
import { LAYOUT_TYPES } from '../utils/constants';

export function renderLayout(props) {
  const { Component, postData } = props;

  switch (get(postData, 'layout')) {
    case LAYOUT_TYPES['POST']:
      return (
        <MainLayout>
          <Component {...props} postData={postData} />
        </MainLayout>
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
        <MainLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </MainLayout>
      );
    case LAYOUT_TYPES['PAGE']:
    default:
      return (
        <MainLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </MainLayout>
      );
  }
}
