import React from 'react';
import BlogMeta from '../BlogMeta';
import ConvertkitForm from '../ConvertkitForm';

type LayoutProps = {
  children: any;
  frontMatter: any;
};

const Layout = ({ children, frontMatter }: LayoutProps) => {
  return (
    <>
      <BlogMeta meta={frontMatter} />
      {children}
      <ConvertkitForm />{' '}
    </>
  );
};

export default Layout;
