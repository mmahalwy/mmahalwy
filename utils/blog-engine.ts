import { posts } from './post-list';
// import { pages } from './page-list';

export default (type = 'all') => {
  // these lists are already sorted from newest to oldest
  const postList = posts();

  // after combining the lists, they must be sorted again
  const allData = postList;
  const sortedAllData = allData.sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch).reverse();

  switch (type) {
    case 'posts':
      return postList;
    case 'all':
    default:
      return sortedAllData;
  }
};
