const sitemap = require('nextjs-sitemap-generator');
const globby = require('globby');

(async () => {
  const pages = await globby(['data/**/*.mdx']);

  sitemap({
    baseUrl: 'https://mmahalwy.com',
    ignoredPaths: ['/blog/[slug]'],
    pagesDirectory: `${__dirname}/pages`,
    targetDirectory: 'public/',
    nextConfigPath: `${__dirname}/next.config.js`,
    ignoredExtensions: ['png', 'jpg', 'json'],
    ignoreIndexFiles: true,
    extraPaths: pages.map((page) => {
      return page
        .replace('pages', '')
        .replace('data', '')
        .replace('.js', '')
        .replace('.mdx', '');
    }),
  });
})();
