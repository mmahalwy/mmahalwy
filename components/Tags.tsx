import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { config } from '../config';

const Container = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Tag = styled.a`
  margin-left: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  font-size: 12px;
  padding: 3px 9px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  border: none;

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    opacity: ${(props) => props.theme.opacity};
  }
`;

const TagBlock = ({ tags }) => {
  if (!tags || !Array.isArray(tags)) return null;

  let alphabetizedTags = tags.sort();

  return (
    <Container>
      {alphabetizedTags.map((tag) => (
        <Link key={`${tag}-link`} href={`/search?q=${tag}`}>
          <Tag href={`/search?q=${tag}`}>{tag}</Tag>
        </Link>
      ))}
    </Container>
  );
};

export default TagBlock;
