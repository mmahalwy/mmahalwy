import React, { ReactNode } from 'react';

type MainLayoutProps = {
  children: NonNullable<ReactNode>;
};

const MainLayout = ({ children }: MainLayoutProps) => <div className="main-layout">{children}</div>;

export default MainLayout;
