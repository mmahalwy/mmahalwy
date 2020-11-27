/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NextSeo } from 'next-seo';
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { createSEOConfig } from '../utils/seo';
import Anchor from '../components/dls/Anchor';

const DisplayImage = styled(Image)`
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const meta = {
  title: "Mo's website",
  tags: [],
  layout: 'post',
  publishDate: '',
  modifiedDate: false,
  seoDescription: 'Welcome to my site!',
};

const Index = () => {
  return (
    <div>
      <NextSeo {...createSEOConfig()} />
      <DisplayImage
        src="/static/images/me.jpg"
        alt="mmahalwy"
        width={32}
        height={32}
        objectFit="cover"
      />
      <Heading mb={4}>Hi, I'm Mo</Heading>
      <Text mb={4}>
        I am a software engineer at{' '}
        <Anchor href="https://airbnb.com" target="_blank">
          Airbnb
        </Anchor>
        , working on Omni - an internal CMS that allows anyone to create{' '}
        <Anchor href="https://airbnb.com/adventures" target="_blank">
          landing pages
        </Anchor>
        ,{' '}
        <Anchor
          href="https://reallygoodemails.com/emails/now-serving-your-most-memorable-meal-yet/"
          target="_blank"
        >
          emails
        </Anchor>{' '}
        and{' '}
        <Anchor
          href="https://www.airbnb.com/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A1712"
          target="_blank"
        >
          search promotions
        </Anchor>{' '}
        without the need to code deployment!
      </Text>
      <Text mb={4}>
        <strong>On my free time,</strong> I enjoy playing{' '}
        <Anchor
          href="https://www.sfsfl.com/LibLeague/Team/Team.php?PARAM_SEASON_CODE=2019+PARAM_TEAM_CODE=BELO"
          target="_blank"
        >
          soccer
        </Anchor>
        , eating out, hanging out with friends and working on side projects.
      </Text>
      <Text mb={4}>
        <strong>
          <Anchor href="mailto:mmahalwy@gmail.com">Talk to me about:</Anchor>
        </strong>

        <List>
          <ListItem>
            <ListIcon
              as={() => (
                <span role="img" aria-label="emoji" style={{ marginRight: 4 }}>
                  📈
                </span>
              )}
            />
            investing
          </ListItem>
          <ListItem>
            <ListIcon
              as={() => (
                <span role="img" aria-label="emoji" style={{ marginRight: 4 }}>
                  🏠
                </span>
              )}
            />
            real estate
          </ListItem>
          <ListItem>
            <ListIcon
              as={() => (
                <span role="img" aria-label="emoji" style={{ marginRight: 4 }}>
                  🖥
                </span>
              )}
            />
            tech
          </ListItem>
          <ListItem>
            <ListIcon
              as={() => (
                <span role="img" aria-label="emoji" style={{ marginRight: 4 }}>
                  🇨🇦
                </span>
              )}
            />
            Canada!
          </ListItem>
        </List>
      </Text>
      <Text>
        <strong>I hang out</strong> on{' '}
        <Anchor href="https://twitter.com/mmahalwy" target="_blank">
          Twitter
        </Anchor>
        ,{' '}
        <Anchor href="https://instagram.com/mmahalwy" target="_blank">
          Instagram
        </Anchor>{' '}
        and{' '}
        <Anchor href="https://github.com/mmahalwy" target="_blank">
          Github
        </Anchor>
      </Text>
    </div>
  );
};

export default Index;
