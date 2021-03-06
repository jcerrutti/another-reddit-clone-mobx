import React from 'react';

export default function PostThumbnail({ thumbnail, interactive = false }) {
  return interactive ? (
    <a href={thumbnail} target="_blank" rel="noopener noreferrer">
      <img alt="thumbnail" src={thumbnail} />
    </a>
  ) : (
    <img alt="thumbnail" src={thumbnail} />
  );
}
