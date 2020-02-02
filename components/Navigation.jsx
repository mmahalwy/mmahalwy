import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { config } from '../config';
import MainLayout from './layouts/MainLayout';
import Anchor from './dls/Anchor';

const Item = styled.li`
  display: inline-block;
  list-style-type: none;
  height: 40px;
  padding: 0px 16px;

  &:first-child {
    padding-left: 0px;
  }
`;

export const NavigationItem = (props) => (
  <Item>
    <Link href={props.data.link}>
      <Anchor href={props.data.link}>{props.data.text}</Anchor>
    </Link>
  </Item>
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
