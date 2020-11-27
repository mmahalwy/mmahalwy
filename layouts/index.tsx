import React from 'react';
import BlogMeta from '../components/BlogMeta';
import ConvertkitForm from '../components/ConvertkitForm';

type LayoutProps = {
  children: any;
  // frontMatter: any;
  meta: any;
};

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <BlogMeta meta={meta} />
      {children}
      <ConvertkitForm />{' '}
    </>
  );
};

export default Layout;
