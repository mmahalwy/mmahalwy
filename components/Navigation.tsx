import React from 'react';
import styled from '@emotion/styled';
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

type NavigationItemProps = {
  data: {
    link: string;
    text: string;
  };
};

export const NavigationItem = ({ data }: NavigationItemProps) => (
  <Item>
    <Anchor href={data.link}>{data.text}</Anchor>
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
