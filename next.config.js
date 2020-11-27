/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
// const rehypePrism = require('@mapbox/rehype-prism');
const withFonts = require('next-fonts');
const images = require('remark-images');
const emoji = require('remark-emoji');
const withOptimizedImages = require('next-optimized-images');
const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const withMdxEnhanced = require('next-mdx-enhanced');

// const withMDX = require('@zeit/next-mdx')({
//   // parse mdx files
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [images, emoji],
//     rehypePlugins: [rehypePrism],
//   },
// });

module.exports = withPlugins([
  withFonts,
  withOptimizedImages,
  withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    remarkPlugins: [
      require('remark-autolink-headings'),
      require('remark-slug'),
      require('remark-code-titles'),
      images,
      emoji,
    ],
    rehypePlugins: [mdxPrism],
    extendFrontMatter: {
      process: (mdxContent) => ({
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent),
      }),
    },
  }),
]);

// withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// });
