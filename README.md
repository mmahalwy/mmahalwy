# mmahalwy person site

Website forked [from](https://github.com/lorenseanstewart/nextjs-mdx-blog-kit).

#### Feature list:

- Static website deployment
- Write your posts in markdown, and use React components in your markdown thanks to [MDX](https://github.com/mdx-js/mdx). Or use plain React, if you prefer.
- A CLI for creating new pages or posts. It processes all the necessary meta data for creating the blog list and adding SEO data to all pages.
- Perfect Lighthouse scores.
- Excellent SEO
- Service Worker that caches all pages and posts for offline reading
- Tag search
- A [reading progress indicator](https://github.com/jeremenichelli/scrollProgress) on posts (optional/configurable)
- [Code syntax highlighting](https://github.com/conorhastings/react-syntax-highlighter)
- [Smooth scroll links](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll)
- [Optimized images](https://github.com/cyrilwanner/next-optimized-images)
- Tests are set up using [Jest](https://github.com/facebook/jest)
- Easy deploys with Zeit's [Now](https://zeit.co/now)

## CLI

This blog processes pages based on the meta data found in the page and post component files. To make sure you include all necessary meta data, and that page/post components conform to the requirements of the BlogEngine and its utility functions, **it is important to use the CLI to scaffold all new pages and posts**.

CLI:

1. Use the file as a script.
   - This allows you to use commands like `./cli.js -t post -m`

#### No Install: CLI file as script

At the root of the project, in your terminal run the command `chmod +x ./cli.js` or `sudo chmod +x ./cli.js`. This allows you to use the CLI like a script: `./cli.js <your-flags-and-options-here>`.

#### CLI Flags

To list the flags and their descriptions, run one of the following commands in the root of the project:

1. `./cli.js help`

Either of those commands will display:

```
Flags:
      -t  ["template"  | String  | either "page" or "post"]
      -m  ["mdx file"  |   n/a   | if present file will be .mdx, else .js]
      -f  ["file name" | String  | e.g. "how-to-build-a-nextjs-app"]
```

#### Creating pages and posts

The basic difference between a page and a post is that a **page** lives inside the `pages/` directory, whereas a **post** lives in the `pages/blog/` directory. Only **post** files are included in the blog post list at `/blog`. Use the `-t` flag to indicate whether you want to create a new page or a new post.

```
blog -t page -f newPage // this creates a page named "newPage.js"
blog -t post            // this creates a JavaScript post with a randomized file name
```

As you can see above, the `-f` flag allows you to **name your new file**. Your page/post component name will also be the url to that page/post, so name your components strategically. For example, a page named `my-page.js` will have the url `www.mybaseurl.com/my-page`. A post named `my-post.mdx` will have the url `www.mybaseurl.com/blog/my-post`.

If you omit the `-f` flag, the CLI will generate a file name for you but you should rename it immediately.

You also have the option of using a **MDX** file or a **JavaScript** file for your new page/post.

```
blog -t page -m // this creates a MDX file with a randomized name
blog -t page -f contact   // this creates a JavaScript file named contact.js
```

#### Meta Data

Each page/post needs to export (not default export) a `meta` object. The **required fields** for content are:

```
title: "Title of Page/Post goes here",
tags: ["tag-1", "tag-2"],
layout: "page",
publishDate: "2011-01-01",
modifiedDate: false,
seoDescription: "In this post I <keyword> with <keyword>. And blah blah."
```

- **title**: The title displayed on the page. It is also used for SEO.
- **tags**: This array enables the tag search page. The tags are also used in the SEO header property: `<meta name="keywords" content={stringOfAllPostTags} />`.
- **layout**: This is used in the `utils/render-app-layout.js` function. There are currently four layouts (and a default layout): `"blog-post-list"`, `"post"`, `"page"` and `"search"`.
- **publishDate**: This is displyed on blog posts. It is also used for SEO. Must be in "YYYY-MM-DD" format.
- **modifiedDate**: Used for SEO. Include this if the post has been modified. If it has not been modified, leave it out or give it the value `false`.
- **seoDescription**: Used for SEO.

Blog posts have optional meta properties. These **optional fields** are:

- **exclude**: Set this property to `true` if you do not want it to appear on the blog post list on the `/blog` page.
- **hideProgressBar**: Set this property to `true` if you do not want the reading progress bar for a particular blog post.

If you do not include the optional properties for a blog post, they are assumed to be false.

## BlogMeta Component

This component should be added to each blog post after the `meta` export. Make sure there is an empty line between the `meta` export and `<BlogMeta />`, otherwise the MDX parser will throw an error. To illustrate:

```
import BlogMeta from "../../components/BlogMeta";
---
    title: "Third Post With Image",
    tags: ["mdx", "javascript"],
    layout: "post",
    publishDate: "2017-12-10",
    hideProgressBar: true,
    seoDescription: "This post demonstrates a photo embed and Twitter card."
};

<BlogMeta data={props} />
```

_All this is added for you when you use the CLI, but it's good to know these requirements exist in case you create posts without the CLI._

## Smooth Scroll

Smooth scrolling is achieved through the use of two components: `<SmoothLink />` and `<LinkAnchor />`. The links that you click in order to scroll somewhere are the `<SmoothLink />`s. The destination of the scroll in the `<LinkAnchor />`.

The `<SmoothLink />` takes two props:

- **target**: This is the id you want to scroll to.
- **linkText**: This is the text displayed by the link.

`<LinkAnchor />` can be any html element that is the destination of a scroll. `<LinkAnchor />` takes three props:

- **element**: This is the type of html element the anchor needs to be. In the component file there is a list of valid html tags. To make additional tags valid, add them to the list.
- **id**: The anchor html tag needs an id that connects the `<SmoothLink />` to the `<AnchorLink />`.
- **text**: This is the text the html tag will display.

If everything is working correctly, when you click a `<SmoothLink />` it will scroll the user down to its dedicated `<AnchorLink />`. For reference, check out an example: `pages/blog/demo-reading-progress-bar.mdx`.

For more information, refer to the `react-anchor-link-smooth-scroll` [docs](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll).

## Images in MDX

To use an image in an MDX file, import the image like this:

```
import imageUrl from "../../public/images/mountains.jpg";
```

Then use the image like this:

```
<img src={imageUrl} className="img-centered" alt="Image alt" />
```

## Blog Engine

The blog engine extracts the meta objects from each page file, constructs several new properties, and creates an array of all page data. This array is used to construct and sort the post list on the `/blog` page as well as the tag search page at `/search/?q=tagName`.

For individual pages, this data is used to determine the layout for each page. The data also contains SEO information that is injected into the markup of each post.

The blog engine uses `utils/page-list.js` to get data from files in the `/pages` folder, and `utils/post-list.js` to extract data from the `/pages/blog` folder. These files use the [Babel Preval plugin](https://github.com/kentcdodds/babel-plugin-preval) to get the filenames from the `/pages` (and `/pages/blog`) directory. This list of filenames is used to import meta data from component files.

Checkout the comments in `utils/page-list.js`, `utils/post-list.js`, and `utils/blog-engine.js` to get a better idea how the BlogEngine works.

## Icon Pack

This blog kit uses SVG icons from `react-icons`. Information about usage can be found in the project docs [here](https://github.com/react-icons/react-icons).

## Branded Icons (favicon, etc.)

In `static/icons` you will see many png files with name like `icon_144`. The `144` in the name means it is a 144px x 144px square (all of the images are square). Keep the file names, but replace all these icons in all the noted sizes with your own brand images/icons.

These icons are displayed if a user desides to save your blog to their homescreen on mobile devices and some desktops.

## Custom Fonts

To load custom fonts, follow these two steps:

- Add the font files to `/fonts`
- Add font face CSS rules to `/styles/index.js`

Keep in mind custom fonts affect your site's performance, so use be careful with your CSS `font-display` property. This project uses `font-display: auto;` to help make font loading more performant.

If you do not want to use custom fonts, delete the files from `/fonts`, and remove both (1) the `@font-face` rules and (2) the `font-family: "Abril Fatface"` reference from `/styles/index.js`.

## Precaching Files for Offline Use

See the comments in `my-worker.js`.

All pages cache for desktop, so offline the entire blog should be available.

For mobile users, only pages that have been visited are cached.

**Disclaimer**: the notes above about what caches vs. what does not are gleaned from some informal investigating on my part. I'm sure there are a variety of limitations based on browser and device.

## Deploying with Now

First sign up for a Now account [here](https://zeit.co/now), and install the Now CLI. Installing the Now desktop app will also install the Now CLI.

Once you have an account and the CLI installed, open your terminal at the root of your project and issue the command `now`.

For more information see the Now [docs](https://zeit.co/docs/v2/deployments/official-builders/static-build-now-static-build/).

## Warnings and Gotchas:

- Blog posts must have an empty line between the meta export and the <BlogMeta /> component. The MDX parser errors if there is not a space there.
- If you add a new page/post and it does not appear as a page or post, run `npm run clean` or delete `.next/` and run `npm run dev`.
# gtahalalmeats
