import Link from '@docusaurus/Link';
import React from 'react';

export default function Contributor({
  exercisePullRequest,
  docsPullRequest,
  userId,
  description,
}) {
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
      {exercisePullRequest && (
        <Link
          style={{ margin: '1rem' }}
          to={`https://github.com/jappuccini/java-exercises/pull/${exercisePullRequest}`}
        >
          #{exercisePullRequest} {description}
        </Link>
      )}
      {docsPullRequest && (
        <Link
          style={{ margin: '1rem' }}
          to={`https://github.com/jappuccini/java-docs/pull/${docsPullRequest}`}
        >
          #{docsPullRequest} {description}
        </Link>
      )}
    </div>
  );
}
