import Link from '@docusaurus/Link';
import React from 'react';

export default function Contributor({ pullRequest, userId, description }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <img
        style={{ height: '50px' }}
        src={`https://avatars.githubusercontent.com/u/${userId}?s=50&v=4`}
      />
      <Link
        style={{ margin: '1rem' }}
        to={`https://github.com/jappuccini/java-exercises/pull/${pullRequest}`}
      >
        #{pullRequest} {description}
      </Link>
    </div>
  );
}
