// @ts-ignore
import image from '../public/static/images/my-pic.jpg';

export const config = {
  author: 'Mohamed El Mahallawy',
  siteName: 'mmahalwy',
  siteDescription: 'The personal blog of Mo',
  defaultPageTitle: 'mmahalwy',
  blogTitle: 'Blog',
  baseUrl: 'mmahalwy.com',
  websiteLogo: image,
  twitterHandle: '@mmahalwy',
  twitterCardType: "mmahalwy's blog",
  navigation: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
  ],
  css: {
    primaryColor: '#536DFE',
    accentColor: '#455A64',
    lightGray: '#eeeeee',
    backgroundColor: '#ffffff',
    black: '#333',
  },
};
