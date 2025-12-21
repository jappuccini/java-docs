import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

export default function Exercise({
  pullRequest,
  branchSuffix,
}): React.JSX.Element {
  return (
    <Tabs>
      <TabItem value="exercise" label="Exercise" default>
        <CodeBlock language="console">
          {`git switch exercises/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="solution" label="Solution">
        <CodeBlock language="console">
          {`git switch solutions/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="pullrequest" label="Pull Request">
        Alle  Änderungen zwischen der Aufgabe und der Lösung findest du im Pull
        Request{' '}
        <Link
          to={`https://github.com/jappuccini/java-exercises/pull/${pullRequest}/files?diff=split`}
        >
          PR#{pullRequest}
        </Link>
      </TabItem>
    </Tabs>
  );
}
