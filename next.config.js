const rehypePrism = require('@mapbox/rehype-prism');
const withFonts = require('next-fonts');
const images = require('remark-images');
const emoji = require('remark-emoji');
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
const withMDX = require('@zeit/next-mdx')({
  // parse mdx files
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withOffline(
  withFonts(
    withOptimizedImages(
      withMDX({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      }),
    ),
  ),
);
