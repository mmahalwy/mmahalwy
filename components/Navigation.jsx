import React from 'react';
import Link from 'next/link';
import { config } from '../config';
import MainLayout from './layouts/MainLayout';
import Anchor from './dls/Anchor';

export const NavigationItem = (props) => (
  <li>
    <Link href={props.data.link}>
      <Anchor href={props.data.link}>{props.data.text}</Anchor>
    </Link>
    <style jsx>{`
      li {
        display: inline-block;
        list-style-type: none;
        height: 40px;
        padding: 0px 16px;
      }
      a {
        text-decoration: none;
        font-size: 20px;
      }
    `}</style>
  </li>
);

const Navigation = () => (
  <MainLayout>
    <ul>
      {config.navigation.map((navData) => {
        return <NavigationItem key={navData.link} data={navData} />;
      })}
    </ul>
    <style jsx>{`
      ul {
        padding: 0;
      }
    `}</style>
  </MainLayout>
);

export default Navigation;
