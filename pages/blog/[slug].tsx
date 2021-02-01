import hydrate from 'next-mdx-remote/hydrate';
import React from 'react';
import BlogLayout from '../../components/layouts/BlogLayout';
import MdxComponents from '../../components/MdxComponents';
import { getFiles, getFileBySlug } from '../../utils/mdx';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MdxComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
