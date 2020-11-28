import image from '../public/static/images/me.jpg';

// eslint-disable-next-line import/prefer-default-export
export const config = {
  author: 'Mohamed El Mahallawy',
  siteName: 'mmahalwy',
  siteDescription: 'Software engineer @Airbnb',
  defaultPageTitle: "Mo's website",
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
    primaryColor: '#111',
    accentColor: '#455A64',
    lightGray: '#eeeeee',
    backgroundColor: '#fff',
    black: '#111',
    white: '#fff',
    textColor: '#333',
    opacity: 0.7,
  },
};
