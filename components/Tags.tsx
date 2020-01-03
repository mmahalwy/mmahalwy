import React from 'react';
import Link from 'next/link';
import { config } from '../config';

const TagBlock = ({ tags }) => {
  if (!tags || !Array.isArray(tags)) return null;

  let alphabetizedTags = tags.sort();

  return (
    <small className={`tag-container`}>
      {alphabetizedTags.map((tag) => (
        <Link key={`${tag}-link`} href={`/search?q=${tag}`}>
          <a key={tag} className="tag">
            {tag}
          </a>
        </Link>
      ))}
      <style jsx>{`
        .tag-container {
          margin-top: 10px;
        }
        a.tag {
          margin-left: 10px;
          background-color: ${config.css.primaryColor};
          color: #fff;
          font-size: 12px;
          padding: 3px 9px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          border: none;
        }

        a.tag:first-of-type {
          margin-left: 0px;
        }
      `}</style>
    </small>
  );
};

export default TagBlock;
