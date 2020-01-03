import React from 'react';
import Link from 'next/link';
import { config } from '../config';

export const NavigationItem = (props) => (
  <li>
    <Link href={props.data.link}>
      <a>{props.data.text}</a>
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
  <>
    <ul>
      {config.navigation.map((navData) => {
        return <NavigationItem key={navData.link} data={navData} />;
      })}
    </ul>
  </>
);

export default Navigation;
