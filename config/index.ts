// @ts-ignore
import image from '../public/static/images/my-pic.jpg';
import { darken } from 'polished';

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
    backgroundColor: '#111',
    black: '#111',
    white: '#fff',
    textColor: darken(0.3, '#fff'),
    opacity: 0.7,
  },
};
